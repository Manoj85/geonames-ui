import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './features/home/components/Home';
import renderMain from './features/common/components/Main';
import TopBar from './features/common/components/topbar/TopBar';
import './App.css';

const App = () => (
    <Router>
      <Switch>
        <Route
            exact
            path="/"
            render={() => renderMain(<TopBar title="VaDER" />, <Home />)()}
        />
      </Switch>
    </Router>
);

export default App;
