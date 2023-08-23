import React from 'react';
import './styles.css';
import { Provider } from './context/Context';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import About from './components/About';
import BookCart from './components/BookCart';
import BookDetails from './components/BookDetails';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Provider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/cart" element={<BookCart />} />
        </Routes>
      </div>
    </Provider>
  );
};

const Home = () => (
  <>
    <Header />
    <Books />
  </>
);

export default App;
