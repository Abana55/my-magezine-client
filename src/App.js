import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import WriteArticle from './pages/WriteArticle/WriteArticle';
import './App.css';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/write-article" element={<WriteArticle />} />
              <Route path="/articles/:id" element={<ArticlePage />} />
              <Route path="*" component={NotFound} />
          </Routes>
      </Router>
  );
}

export default App;
