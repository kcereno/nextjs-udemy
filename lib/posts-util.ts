import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { createSlug } from '@/utils/functions';
import { PostDataI } from '@/models/interfaces';

const postDirectory = path.join(process.cwd(), 'posts');

const getPostData = (fileName: string) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const {
    data: { title, date, image, excerpt, isFeatured },
    content,
  } = matter(fileContent);

  const postSlug = createSlug(fileName);

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

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirectory);

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
