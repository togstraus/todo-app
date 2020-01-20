import React from 'react';
import './App.css';
import TodoScreen from './screen/TodoScreen'
import Menu from './components/Menu'
import CompositionPatternScreen from './screen/CompositionPatternScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <Menu/>
    <hr/>
    <Switch>
      <Route exact path="/">
        <h2>Home</h2>        
      </Route>
      <Route path="/todo">
        <TodoScreen/>
      </Route>
      <Route path="/composition">
        <CompositionPatternScreen/>
      </Route>
    </Switch>
  </Router>     
);

 export default App;