import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import { FcRight } from 'react-icons/fc';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { fetchAeroplane } from '../redux/aeroplanes/aeroplanes';
import '../styles/Homepage.css';

const Aeroplanes = () => {
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

  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 2 },
    1024: { items: 4 },
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center home">
      <h2>Latest Models</h2>
      <p>Kindly select a plane for renting</p>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        items={aeroplanes.map((a) => (
          <div key="aero" className="aero">
            <img src={a.image} alt={a.name} onDragStart={handleDragStart} role="presentation" width="150" height="150" className="image" />
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
      />
    </div>
  );
};

export default Aeroplanes;
