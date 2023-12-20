import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './styles/style.css'
import { Button } from './components/buttons';
function App() {
  return (
    <Router>
          <Route path="/">
            <Button />
          </Route>
          <Route path="/business">
            {/* <Friends /> */}
          </Route>
    </Router>
  );
}

export default App;
