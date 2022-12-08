import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { fetchAeroplane } from '../redux/aeroplanes/aeroplanes';

const Aeroplane = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAeroplane());
  }, []);
  const aeroplane = useSelector((state) => state);
  return (
    <>
      <h2 className="text-light">Latest Models</h2>
      <p>Kindly select a plane for renting</p>
      <div>
        <img src={aeroplane.photo} alt={aeroplane.name} width="50" height="50" />
        <p>{aeroplane.name}</p>
        <p>{aeroplane.description}</p>
      </div>
    </>
  );
};

export default Aeroplane;
