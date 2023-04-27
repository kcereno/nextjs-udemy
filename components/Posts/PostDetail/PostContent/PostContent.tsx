import React from 'react';
import styles from './PostContent.module.css';
import PostHeader from '../PostHeader/PostHeader';
import ReactMarkdown from 'react-markdown';
import { PostDataI } from '@/models/interfaces';

interface PropsI {
  post: PostDataI;
}

const PostContent = ({ post: { slug, image, title, content } }: PropsI) => {
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={styles.content}>
      <PostHeader
        title={title}
        image={imagePath}
      />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
