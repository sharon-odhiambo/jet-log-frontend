import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import { FcRight } from 'react-icons/fc';
import { fetchAeroplane } from '../redux/aeroplanes/aeroplanes';

const Aeroplane = () => {
  const dispatch = useDispatch();
  const aeroplanes = useSelector((state) => state);
  useEffect(() => {
    if (!aeroplanes.length) {
      dispatch(fetchAeroplane());
    }
  }, [dispatch, aeroplanes]);

  const onClickHandler = (e) => {
    localStorage.clear();
    const aero = aeroplanes.find((a) => a.id === e.target.id);
    localStorage.setItem('aero', JSON.stringify(aero));
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2>Latest Models</h2>
      <p>Kindly select a plane for renting</p>
      {aeroplanes.map((a) => (
        <div key="aero">
          <img src={a.image} alt={a.name} width="300" height="100" />
          <p>{a.name}</p>
          <p>{a.description}</p>
          <NavLink
            key={a.links}
            to="/Aeroplane"
          >
            <FcRight id={a.id} onClick={onClickHandler} />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Aeroplane;
