import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
      <Routes>
        <Route path="/" element={<Aeroplanes />} />
        <Route path="/Aeroplanes" element={<Aeroplanes />} />
        <Route path="/Aeroplanes/:aeroplaneId" element={<Aeroplane />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
