import React from 'react';
import './styles.css';
// import { Provider } from './context/Context';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import About from './components/About';
import BookCart from './components/BookCart';
import BookDetails from './components/BookDetails';
import Search from './components/Search';
import BookCartCheckOut from './components/BookCartCheckOut';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<BookCart />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/checkout" element={<BookCartCheckOut />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/search/:searchTerm" element={<BookDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
