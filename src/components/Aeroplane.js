import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { aeroplanes } from './Aeroplanes';

const Aeroplane = () => {
    const { aeroplaneId } = useParams();
	const aeroplanes = useSelector((state) => state);
    const aeroplane = aeroplanes.findIndex(obj => obj.id == aeroplaneId);
    console.log(aeroplane);
    return <div>
        <h1>Aeroplane</h1>
        <p>{aeroplaneId}</p>
        <p>{aeroplanes[aeroplane].name}</p>
        <p>{aeroplanes[aeroplane].description}</p>
        <p>{aeroplanes[aeroplane].make_year}</p>
        <p>{aeroplanes[aeroplane].image}</p>
        <Link to="/">Back to Aeroplanes</Link>

    </div>
}


// Aeroplane.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     make_year: PropTypes.number.isRequired,
// };

export default Aeroplane;
