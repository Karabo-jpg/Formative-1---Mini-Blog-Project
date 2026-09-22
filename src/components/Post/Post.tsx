import React from 'react';
import { Post as PostType } from '../../types/Post';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <article className="post-container">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-meta">
        <span className="post-author">By {post.author}</span>
        <span className="post-date">{post.date}</span>
      </div>
      <p className="post-preview">{post.preview}</p>
    </article>
  );
};

export default Post;
