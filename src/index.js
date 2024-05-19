import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './components/about';
import App2 from './App2';
import WisataDetail from './components/WisataDetail';
import Food from './components/Food';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/tour" element={<App2 />} />
      <Route path="/culinary" element={<Food />} />
      <Route path="/tour/view/:id" element={<WisataDetail />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
