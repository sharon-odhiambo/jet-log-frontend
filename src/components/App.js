import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import DeleteAeroplanes from './Aeroplanes/DeletePlane';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Aeroplanes />} />
          <Route path="/delete-plane" element={<DeleteAeroplanes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
