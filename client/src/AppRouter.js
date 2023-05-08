import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Home from './components/home/home.js';
import Dashboard from './components/dashboard/dashboard.js';
import ContactPage from './components/contactUs/contactUs.js';
import AddNewComplaint from './components/newComplaint/newComplaint';

const AppRouter = () => {
  return (
    <HashRouter>
    <div>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/contactUs" component={ContactPage}/>
        <Route path="/post" component={AddNewComplaint}/>
      </div>
    </div>
  </HashRouter>
  );
};

export default AppRouter;
