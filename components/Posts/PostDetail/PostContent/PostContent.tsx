import React from 'react';
import styles from './PostContent.module.css';
import PostHeader from '../PostHeader/PostHeader';
import ReactMarkdown from 'react-markdown';

const PostContent = () => {
  const DUMMY_POST = {
    title: 'Test',
    image: 'getting-started-nextjs.png',
    slug: 'getting-started-nextjs',
    date: new Date(),
    content: '# This is a first post',
  };

  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={imagePath}
      />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
