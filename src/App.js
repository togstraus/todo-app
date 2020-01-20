import React from 'react';
import './App.css';
import TodoScreen from './screen/TodoScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <h2>Home</h2>        
      </Route>
      <Route path="/todo">
        <TodoScreen/>
      </Route>
    </Switch>
  </Router>     
);

 export default App;