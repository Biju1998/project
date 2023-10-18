import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './List';
import Result from './Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/result/:selectedState/:selectedcity" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;