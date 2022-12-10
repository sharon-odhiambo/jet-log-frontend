import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Aeroplanes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
