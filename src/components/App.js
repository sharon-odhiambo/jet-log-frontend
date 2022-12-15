import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes/Aeroplanes';
import DeleteAeroplanes from './Aeroplanes/DeletePlane';
import Aeroplane from './Aeroplanes/Aeroplane';
import Navbar from './Navbar/Navbar';
import Reservations from './Reservations/Reservations';
import ReservationFrom from './Reservations/MakeReservation';
import InputAeroplane from './Aeroplanes/InputAeroplane';

function App() {
  let isAdmin;
  let session;

  if (localStorage.getItem('session')) {
    session = JSON.parse(localStorage.getItem('session'));
    isAdmin = session.role === 'admin';
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Aeroplanes />} />
          {isAdmin && (
            <Route path="/delete-plane" element={<DeleteAeroplanes />} />
          )}
          <Route path="/Aeroplanes" element={<Aeroplanes />} />
          <Route path="/Aeroplanes/:aeroplaneId" element={<Aeroplane />} />
          {isAdmin && <Route path="/add-plane" element={<InputAeroplane />} />}
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/MakeReservation" element={<ReservationFrom />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
