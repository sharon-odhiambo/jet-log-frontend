import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aeroplanes />} />
        <Route path="/Aeroplanes" element={<Aeroplanes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
