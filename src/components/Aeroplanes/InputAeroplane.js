import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAeroplane } from '../../redux/aeroplanes/aeroplanes';
import '../../styles/add-plane.css';

const InputAeroplane = () => {
  const dispatch = useDispatch();

  const addsAeroplane = (aeroplaneItem) => {
    dispatch(addAeroplane(aeroplaneItem));
  };

  const [aeroplane, setAeroplane] = useState({
    name: '',
    make_year: '',
    country_of_origin: '',
    fuel_economy: '',
    long_range_cruise_speed: '',
    passenger_capacity: '',
    crew: '',
    description: '',
    photo: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const aeroplaneItem = {
      name: aeroplane.name,
      make_year: aeroplane.make_year,
      country_of_origin: aeroplane.country_of_origin,
      fuel_economy: aeroplane.fuel_economy,
      long_range_cruise_speed: aeroplane.long_range_cruise_speed,
      passenger_capacity: aeroplane.passenger_capacity,
      crew: aeroplane.crew,
      description: aeroplane.description,
      photo: aeroplane.photo,
    };
    addsAeroplane(aeroplaneItem);
    setAeroplane({
      name: '',
      make_year: '',
      country_of_origin: '',
      fuel_economy: '',
      long_range_cruise_speed: '',
      passenger_capacity: '',
      crew: '',
      description: '',
      photo: '',
    });
  };
  return (
    <form onSubmit={handleChange} className="add-form">
      <h2>Hello Admin! Fill the form to add a new aeroplane.</h2>
      <input
        type="text"
        placeholder="Name"
        value={aeroplane.name}
        onChange={(e) => setAeroplane({ ...aeroplane, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Make Year"
        value={aeroplane.make_year}
        onChange={(e) => setAeroplane({ ...aeroplane, make_year: e.target.value })}
      />
      <input
        type="text"
        placeholder="Country of Origin"
        value={aeroplane.country_of_origin}
        onChange={(e) => setAeroplane({ ...aeroplane, country_of_origin: e.target.value })}
      />
      <input
        type="text"
        placeholder="Fuel Economy"
        value={aeroplane.fuel_economy}
        onChange={(e) => setAeroplane({ ...aeroplane, fuel_economy: e.target.value })}
      />
      <input
        type="text"
        placeholder="Long Range Cruise Speed"
        value={aeroplane.long_range_cruise_speed}
        onChange={(e) => setAeroplane({
          ...aeroplane,
          long_range_cruise_speed: e.target.value,
        })}
      />
      <input
        type="text"
        placeholder="Passenger Capacity"
        value={aeroplane.passenger_capacity}
        onChange={(e) => setAeroplane({ ...aeroplane, passenger_capacity: e.target.value })}
      />
      <input
        type="text"
        placeholder="Crew"
        value={aeroplane.crew}
        onChange={(e) => setAeroplane({ ...aeroplane, crew: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={aeroplane.description}
        onChange={(e) => setAeroplane({ ...aeroplane, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Photo"
        value={aeroplane.photo}
        onChange={(e) => setAeroplane({ ...aeroplane, photo: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputAeroplane;
