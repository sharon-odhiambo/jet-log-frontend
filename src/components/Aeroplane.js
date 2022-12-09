import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { aeroplanes } from './Aeroplanes';

const Aeroplane = () => {
    const { aeroplaneId } = useParams();
	const aeroplane = useSelector((state) => state);
    console.log(aeroplane);
    return <div>
        <h1>Aeroplane</h1>
        <p>{aeroplaneId}</p>
        <Link to="/">Back to Aeroplanes</Link>

    </div>
}


// Aeroplane.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     make_year: PropTypes.number.isRequired,
// };

export default Aeroplane;
