import React from 'react';
import style from './PostsGrid.module.css';
import PostItem from '../PostItem/PostItem';
import { PostI } from '@/models/interfaces';

interface Props {
  posts: PostI[];
}

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.title}
          post={post}
        />
      ))}
    </ul>
  );
};

export default PostsGrid;
