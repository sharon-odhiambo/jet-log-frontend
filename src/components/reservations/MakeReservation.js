/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const ReservationFrom = () => {
  // structure of the reservation table:
  // startDate - endDate - userId - aeroplaneId - city
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  // get user id from local storage
  const userId = localStorage.getItem('user.id');
  // get aeroplane id from the url
  const { aeroplaneId } = useParams();
  const [aeroplaneName, setAeroplaneName] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const aeroplanes = useSelector((state) => state.aeroplanes);
  const dispatch = useDispatch();
  const submitReservation = (e) => {
    e.preventDefault();
    const reservation = {
      start_date: startDate,
      end_date: endDate,
      user_id: userId,
      aeroplane_id: aeroplaneId,
      city,
    };

    const notify = (response) => {
      if (response === 201) {
        setMessage('Reservation created successfully ✔️');
      } else {
        setMessage('Something went wrong ❌');
      }
    };

    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservation),
    };
    fetch('http://localhost:3000/api/v1/users/${userId}/reservations', request)
      .then((response) => notify(response.status));

    setStartDate('');
    setEndDate('');
    setCity('');
    setInterval(() => { setMessage(''); }, 5000);
  };

  useEffect(() => {
    dispatch(fetchAeroplanes());
  }, [dispatch]);

  if (userId === null) {
    return (
      <div>Please register/login to make a reservation</div>
    );
  }

  return (
    <div>
      <form id="reservation-form">
        <div className="form-group">
          <label htmlFor="aeroplaneName">Aeroplane Name</label>
          <select
            onBlur={(e) => setAeroplaneName(e.target.value)}
            // autoFocus
            value={aeroplaneName}
            id="dropdown"
          >
            <option value="none" selected disabled hidden>Select an Aeroplane</option>
            {aeroplanes.map((aeroplane) => (
              <option key={aeroplane.id} value={aeroplane.id}>{aeroplane.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input value={city} type="text" id="city" onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit" onClick={(e) => submitReservation(e)}>Reserve</button>
        </div>
      </form>
      <span>{message}</span>
    </div>
  );
};

export default ReservationFrom;
