import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MakeReservation from './components/Reservations/MakeReservation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <h1>Hello World</h1>
        <MakeReservation />
      </div>
    </div>
  );
}

export default App;
