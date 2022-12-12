import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
import { ImCircleRight } from 'react-icons/im';

const Aeroplane = () => {
  const { aeroplaneId } = useParams();
  const aeroplanes = useSelector((state) => state);
  // eslint-disable-next-line eqeqeq
  const plane = aeroplanes.findIndex((obj) => obj.id == aeroplaneId);
  return (
    <div className="plane-details">
      <div>
        <img className="plane-details-image center" src={aeroplanes[plane].image} alt={aeroplanes[plane].name} />
      </div>
      <div className="plane-right d-flex flex-column center">
        <h1 className="text-center">{aeroplanes[plane].name}</h1>

        <div className="plane-table">
          <div className="d-flex justify-content-between">
            <p>Make Year</p>
            <p>{aeroplanes[plane].make_year}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Country of Origin</p>
            <p>{aeroplanes[plane].country}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Fuel ranking</p>
            <p>{aeroplanes[plane].fuel}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Passengers capacity</p>
            <p>{aeroplanes[plane].passengers}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Crew capacity</p>
            <p>{aeroplanes[plane].crew}</p>
          </div>
        </div>

        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#4a4a4a',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          DISCOVER MORE MODELS
          <GoChevronRight color="#f8c605" />
        </Link>
        <Link to="/">
          <button className="reserve-button" type="button">
            Reserve
            <ImCircleRight style={{ margin: '2px 2px 2px 10px' }} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Aeroplane;
