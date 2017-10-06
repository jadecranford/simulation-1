import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import ShelfOverview from './components/ShelfOverview.js';
import BinOverview from './components/BinOverview.js';
import BinDetail from './components/BinDetail.js';
import Headers from './components/Headers.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
         <Headers />
         <Router>
            <Switch>
               <Route path="/" exact component={ShelfOverview} />
               <Route path="/bin/bin" component={BinDetail} />
               <Route path="/bins/:letter" component={BinOverview} />
            </Switch>
         </Router>
      </div>
   );
  }
}

export default App;
