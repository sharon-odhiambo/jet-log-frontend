import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import Aeroplane from './Aeroplane';
import Navbar from './Navbar/Navbar';
import ReservationFrom from './MakeReservation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Aeroplanes />} />
          <Route path="/Aeroplanes" element={<Aeroplanes />} />
          <Route path="/Aeroplanes/:aeroplaneId" element={<Aeroplane />} />
          <Route path="/MakeReservation" element={<ReservationFrom />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
