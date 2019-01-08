import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Menu from './Menu';
import Order from './Order';
import Payment from './payment';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Menu} />
      <Route path="/order" component={Order} />
      <Route path="/payment" component={Payment} />
    </div>
  </Router>
);

export default App;
