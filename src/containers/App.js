import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
