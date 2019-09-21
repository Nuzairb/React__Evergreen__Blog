import React from 'react';
import './App.css';
import Header from './components/Header';
import NewArticle from './components/NewArticle';
import About from './components/About';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <Header />
      <NewArticle />
      <About />
      <Blogs />
    </div>
  );
}

export default App;
