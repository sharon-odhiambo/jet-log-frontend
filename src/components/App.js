import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplane from './Aeroplane';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aeroplane />} />
        <Route path="/Aeroplane" element={<Aeroplane />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
