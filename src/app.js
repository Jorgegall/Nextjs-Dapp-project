import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';   
import Page1 from './Page1';     
import Page2 from './Page2';    

function App() {
  return (
    <Router>
      <Navbar />   
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />    
        <Route path="/page1" element={<Page1 />} />     
        <Route path="/page2" element={<Page2 />} />    
      </Routes>
    </Router>
  );
}

export default App;




