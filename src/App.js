import React, { Fragment } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from './context/Context';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import About from './components/About';
import BookCart from './components/BookCart';
import BookDetails from './components/BookDetails';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
        <Search />
        {/* <Switch> */}
        <Route exact path="/" component={Books} />
        <Route path="/books/:id" component={BookDetails} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={BookCart} /> {/*Adding BookCart to Route*/}
        <Route path="/book-details/:id" component={BookDetails} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
