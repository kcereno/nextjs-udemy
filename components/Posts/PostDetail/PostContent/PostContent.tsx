/* eslint-disable react/no-children-prop */
import React from 'react';
import styles from './PostContent.module.css';
import PostHeader from '../PostHeader/PostHeader';
import ReactMarkdown from 'react-markdown';
import { PostDataI } from '@/models/interfaces';
import Image from 'next/image';
import classes from './PostContent.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface PropsI {
  post: PostDataI;
}

const PostContent = ({ post: { slug, image, title, content } }: PropsI) => {
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code: any) {
      console.log('code ~ code:', code);
      console.log('code ~ code:', code.className);

      return (
        <SyntaxHighlighter
          language="js"
          children={code.children}
          style={atomDark}
        />
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader
        title={title}
        image={imagePath}
      />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
