/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAeroplane } from '../../redux/aeroplanes/aeroplanes';
import '../../styles/MakeReservation.css';

const ReservationFrom = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [aeroplaneId, setAeroplaneId] = useState('');
  // id will be taken from storage (check line 59)
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const aeroplanes = useSelector((state) => state.aeroplanes);
  const session = JSON.parse(localStorage.getItem('session'));
  const { token } = session;
  const { user } = session;
  const userName = user.toUpperCase();

  function handleSubmit(e) {
    e.preventDefault();

    const showMessage = (response) => {
      if (response === 201) {
        setMessage(<div>Reservation is succesfull ✔️</div>);
      } else {
        setMessage(<div>Something went wrong ❌</div>);
      }
    };

    fetch('http://localhost:3000/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reservation: {
          start_date: startDate,
          end_date: endDate,
          aeroplane_id: aeroplaneId,
          city,
        },
      }),
    }).then((response) => showMessage(response.status));

    setStartDate('');
    setEndDate('');
    setCity('');
    setInterval(() => { setMessage(''); }, 5000);
  }

  useEffect(() => {
    dispatch(fetchAeroplane());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('aeroplaneId')) {
      const id = JSON.parse(localStorage.getItem('aeroplaneId'));
      setAeroplaneId(id);
    }
  }, []);

  if (aeroplanes === undefined || aeroplanes.length === 0) {
    return <div id="no-aeroplane" className="text-danger text-center container p-2 reservations pt-5 mt-3">Unfortunately, we don&apos;t have any aeroplanes available.</div>;
  }

  return (
    <div id="reservation-form-container">
      <span id="message">{message}</span>

      <form id="reservation-form" onSubmit={handleSubmit}>
        <div className="reservation-form-group" id="form-header">
          <p id="owner">
            Reservation owner:
            {userName}
          </p>
        </div>
        <div className="reservation-form-group">
          <label className="reservation-label" htmlFor="startDate">Start Date</label>
          <input
            className="reservation-input"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="reservation-form-group">
          <label className="reservation-label" htmlFor="endDate">End Date</label>
          <input
            className="reservation-input"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="reservation-form-group">
          <label className="reservation-label" htmlFor="aeroplaneName">Aeroplane Name</label>
          <select
            className="reservation-input"
            onChange={(e) => setAeroplaneId(e.target.value)}
            value={aeroplaneId}
            id="dropdown"
          >
            <option hidden>
              Select an Aeroplane
            </option>
            {aeroplanes.map((aeroplane) => (
              <option key={aeroplane.id} value={aeroplane.id}>
                {aeroplane.name}
              </option>
            ))}
          </select>
        </div>
        <div className="reservation-form-group">
          <label className="reservation-label" htmlFor="city">City</label>
          <input
            className="reservation-input"
            value={city}
            type="text"
            id="city"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="reservation-form-group">
          <button id="reserve" type="submit">Reserve</button>
        </div>
      </form>
    </div>

  );
};

export default ReservationFrom;
