import React from 'react';
import './App.css';
import Header from './components/Header';
import NewArticle from './components/NewArticle';
import About from './components/About';
import Blogs from './components/Blogs';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NewArticle />
      <About />
      <Blogs />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
