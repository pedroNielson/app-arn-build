import './App.css';
import FormPage from './Container/Form/index';
import ThankPage from './Container/ThankPage/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Container/App'
import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/FormPage" element = {<FormPage />} />
          <Route path = "/ThankPage" element = {<ThankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
