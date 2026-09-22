import React from 'react';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <PostList />
      </main>
    </div>
  );
};

export default App;
