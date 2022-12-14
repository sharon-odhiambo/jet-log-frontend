import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import Aeroplane from './Aeroplane';
import Navbar from './Navbar/Navbar';
import InputAeroplane from './Aeroplanes/InputAeroplane';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Aeroplanes />} />
          <Route path="/Aeroplanes" element={<Aeroplanes />} />
          <Route path="/Aeroplanes/:aeroplaneId" element={<Aeroplane />} />
          <Route path="/add-plane" element={<InputAeroplane />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
