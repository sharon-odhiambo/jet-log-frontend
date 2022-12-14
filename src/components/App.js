import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import Aeroplane from './Aeroplane';
import Navbar from './Navbar/Navbar';
import Reservations from './Reservations';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Aeroplanes />} />
          <Route path="/Aeroplanes" element={<Aeroplanes />} />
          <Route path="/Aeroplanes/:aeroplaneId" element={<Aeroplane />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
