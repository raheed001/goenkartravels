import React from 'react';
import Head from './components/Head';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import FeaturedPost from './components/FeaturedPost';
import RecentPost from './components/RecentPost';

import RecommendedPost from './components/RecommendedPost';

import './App.css';

function App() {
  return (
    <div className="App">
     <Head />
     <body>
      <Header />
      <div className="search-bar" data-search-bar="">
    <div className="input-wrapper">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="input-field"
      />
      <button
        className="search-close-btn"
        aria-label="close search bar"
        data-search-toggler=""
      >
        <ion-icon name="close-outline" aria-hidden="true" />
      </button>
    </div>
    <p className="search-bar-text">Please enter at least 3 characters</p>
  </div>
  <div className="overlay" data-overlay="" data-search-toggler="" />
  <p />
      <main>
        <article> 
          <Hero />
          <FeaturedPost />
          <RecentPost />
          <RecommendedPost />
          <Newsletter />
        </article>
      </main>
      <Footer />
     </body>
    </div>
  );
}

export default App;
