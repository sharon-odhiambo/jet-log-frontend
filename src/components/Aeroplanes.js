import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
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
  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center mt-5 pt-5 home">
      <h2>Latest Models</h2>
      <p className="top">Kindly select a plane for renting</p>
      <Carousel
        plugins={[
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          900: {
            plugins: [
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
        mouseTracking
      >
        {aeroplanes.map((a) => (
          <div key="aero" className="d-flex flex-column justify-content-center align-items-center gap-3">
            <NavLink
              key={a.links}
              to="/Aeroplane"
            >
              <img
                src={a.image}
                alt={a.name}
                id={a.id}
                onClick={onClickHandler}
                onDragStart={handleDragStart}
                role="presentation"
                width="250"
                height="250"
                className="image"
              />
            </NavLink>
            <span className="name pt-3">{a.name}</span>
            <p className="d-flex align-self-center ps-5">{a.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Aeroplanes;
