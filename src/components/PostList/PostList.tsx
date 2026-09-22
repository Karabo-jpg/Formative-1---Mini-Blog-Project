import React from 'react';
import Post from '../Post/Post';
import { Post as PostType } from '../../types/Post';

const samplePosts: PostType[] = [
  {
    id: '1',
    title: 'Getting Started with Vite',
    author: 'John Smith',
    preview: 'Vite is a fast build tool that significantly improves the frontend development experience...',
    date: '2023-10-25'
  },
  {
    id: '2',
    title: 'Why React Hooks are Awesome',
    author: 'Jane Doe',
    preview: 'Hooks allow you to use state and other React features without writing a class...',
    date: '2023-10-26'
  },
  {
    id: '3',
    title: 'TypeScript Best Practices',
    author: 'Alice Johnson',
    preview: 'Using strict mode in TypeScript helps catch potential bugs early in development...',
    date: '2023-10-27'
  }
];

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      {samplePosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
