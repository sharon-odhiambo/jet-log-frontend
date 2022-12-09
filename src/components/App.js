import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import Aeroplane from './Aeroplane';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aeroplanes />} />
        <Route path="/Aeroplanes" element={<Aeroplanes />} />
        <Route path="/Aeroplanes/:aeroplaneId" element={<Aeroplane />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
