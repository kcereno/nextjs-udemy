import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { createSlug } from '@/utils/functions';
import { PostDataI } from '@/models/interfaces';

const postDirectory = path.join(process.cwd(), 'posts');

export const getPostData = (postId: string) => {
  const postSlug = createSlug(postId);

  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const {
    data: { title, date, image, excerpt, isFeatured },
    content,
  } = matter(fileContent);

  const postData: PostDataI = {
    slug: postSlug,
    title,
    date,
    image,
    excerpt,
    isFeatured,
    content,
  };

  return postData;
};

export const getPostsFiles = () => fs.readdirSync(postDirectory);

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
