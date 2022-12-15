import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../styles/Homepage.css';
import { fetchAeroplane, deletePlane } from '../../redux/aeroplanes/aeroplanes';

const DeleteAeroplanes = () => {
  const dispatch = useDispatch();
  const aeroplanes = useSelector((state) => state.aeroplanes);
  useEffect(() => {
    dispatch(fetchAeroplane());
  }, [dispatch]);

  const onClickDelete = (e) => {
    dispatch(deletePlane(e.target.id));
  };

  return (
    <>
      {!aeroplanes.length && <h6 className="text-center mt-5">No aeroplanes at the moment</h6>}
      {aeroplanes.length > 0 && (
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center home">
        <h2 className="mt-5 pt-5">Delete a Plane</h2>
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
            1100: {
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
          slide={false}
          fade={false}
        >
          {aeroplanes.map((a) => (
            <div key="aero" className="d-flex flex-column justify-content-center align-items-center gap-3">
              <div className="back">
                <div
                  style={{ backgroundImage: `url(${a.image})` }}
                  id={a.id}
                  className="image"
                />
              </div>
              <span className="name pt-3">{a.name}</span>
              <button type="button" id={a.id} onClick={onClickDelete}><span>Delete</span></button>
            </div>
          ))}
        </Carousel>
      </div>
      )}
    </>
  );
};

export default DeleteAeroplanes;
