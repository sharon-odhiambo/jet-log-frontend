/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

const MakeReservation = () => (
  <div>
    <form id="reservation-form">
      <div className="form-group">
        <label htmlFor="aeroplaneName">Aeroplane Name</label>
        <select>
          <option value="none" selected disabled hidden>Select an Aeroplane</option>
          <option value="Boeing 747">Boeing 747</option>
          <option value="Boeing 777">Boeing 777</option>
          <option value="Boeing 787">Boeing 787</option>
          <option value="Boeing 737">Boeing 737</option>
          <option value="Airbus A380">Airbus A380</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
    </form>
  </div>
);

export default MakeReservation;
