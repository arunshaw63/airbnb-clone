import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

  return (
    <div className="app">
      <Router>
        <Header/> 
          <Switch>
           
            <Route exact path="/" component={ Home}  />
            <Route exact path="/search" component={SearchPage}  />
          </Switch>
        <Footer />
      </Router>           
    </div>
  );
}

export default App;
