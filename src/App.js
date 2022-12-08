import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import InputAeroplane from './components/Aeroplanes/InputAeroplane';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/add-plane" element={<InputAeroplane />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
