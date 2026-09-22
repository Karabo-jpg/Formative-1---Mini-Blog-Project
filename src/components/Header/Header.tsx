import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="logo">Dev Insights</div>
      <nav>
        {/* Navigation link doesn't need to be functional for now */}
        <a href="#new-post" className="new-post-link">New Post</a>
      </nav>
    </header>
  );
};

export default Header;
