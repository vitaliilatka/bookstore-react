import React from 'react';
import './styles.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Provider } from './context/Context';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import About from './components/About';
// import BookCart from './components/BookCart';
// import BookDetails from './components/BookDetails';
// import Search from './components/Search';
// import BookCartCheckOut from './components/BookCartCheckOut';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Books />
      <About />
    </div>
  );
}

export default App;
