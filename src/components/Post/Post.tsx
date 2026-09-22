import React from 'react';
import { Post as PostType } from '../../types/Post';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  // Conditional styling logic
  const isJaneDoe = post.author === 'Jane Doe';
  const postDate = new Date(post.date).getTime();
  const now = new Date().getTime();
  const isNew = (now - postDate) < 24 * 60 * 60 * 1000;

  // Inline styles based on condition
  const containerStyle: React.CSSProperties = {
    backgroundColor: isJaneDoe ? '#e8f4f8' : 'white',
    borderLeft: isJaneDoe ? '5px solid #3498db' : 'none',
  };

  const badgeStyle: React.CSSProperties = {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    marginLeft: '10px',
    verticalAlign: 'middle',
  };

  return (
    <article className="post-container" style={containerStyle}>
      <h2 className="post-title">
        {post.title}
        {isNew && <span style={badgeStyle}>New!</span>}
      </h2>
      <div className="post-meta">
        <span className="post-author">By {post.author}</span>
        <span className="post-date">{post.date}</span>
      </div>
      <p className="post-preview">{post.preview}</p>
    </article>
  );
};

export default React.memo(Post);
