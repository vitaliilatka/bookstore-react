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

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
        {/* <Switch> */}
        <Route
          exact
          path="/"
          component={Books}
          render={() => (
            <Fragment>
              <Header />
              <Books />
            </Fragment>
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/book-cart" component={BookCart} />
        <Route path="/book-details/:id" component={BookDetails} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
