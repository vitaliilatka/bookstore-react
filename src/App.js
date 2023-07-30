import React from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
// import { Provider } from './context/Context';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import About from './components/About';
import BookCart from './components/BookCart';
import BookDetails from './components/BookDetails';
import Search from './components/Search';
import BookCartCheckOut from './components/BookCartCheckOut';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Search />
      <Route exact path="/" component={Books} />
      <Route path="/books/:id" component={BookDetails} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={BookCart} />
      <Route path='/checkout' component={BookCartCheckOut} />
      <Route path="/book-details/:id" component={BookDetails} />
    </div>
  );
}

export default App;
