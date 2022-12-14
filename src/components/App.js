import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import DeleteAeroplanes from './Aeroplanes/DeletePlane';
import Aeroplane from './Aeroplane';
import Navbar from './Navbar/Navbar';
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
          <Route path="/delete-plane" element={<DeleteAeroplanes />} />
          <Route path="/Aeroplanes" element={<Aeroplanes />} />
          <Route path="/Aeroplanes/:aeroplaneId" element={<Aeroplane />} />
          {isAdmin && <Route path="/add-plane" element={<InputAeroplane />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
