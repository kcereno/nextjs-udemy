import React from 'react';
import styles from './PostContent.module.css';
import PostHeader from '../PostHeader/PostHeader';
import ReactMarkdown from 'react-markdown';
import { PostDataI } from '@/models/interfaces';
import Image from 'next/image';
import classes from './PostContent.module.css';

interface PropsI {
  post: PostDataI;
}

const PostContent = ({ post: { slug, image, title, content } }: PropsI) => {
  const imagePath = `/images/posts/${slug}/${image}`;

  console.log('PostContent ~ imagePath:', imagePath);

  const customRenderers = {
    p(paragraph) {
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

    // code(code) {
    //   const { className, children } = code;
    //   const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={children}
    //     />
    //   );
    // },
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
