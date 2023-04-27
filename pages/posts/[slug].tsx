import PostContent from '@/components/Posts/PostDetail/PostContent/PostContent';
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import { PostDataI } from '@/models/interfaces';
import { createSlug } from '@/utils/functions';
import { GetStaticPropsContext } from 'next';
import React from 'react';

interface PropsI {
  post: PostDataI;
}

const PostDetailPage = ({ post }: PropsI) => {
  return <PostContent post={post} />;
};

export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  const { slug } = params as { slug: string };

  const postData = getPostData(slug);
  console.log('getStaticProps ~ postData:', postData);
  return {
    props: { post: postData },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => createSlug(fileName));
  console.log('getStaticPaths ~ slugs:', slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
