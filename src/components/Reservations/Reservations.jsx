import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResevations } from '../../redux/reservations/reservations';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const auth = localStorage.getItem('session');

  useEffect(() => {
    dispatch(fetchResevations());
  }, [dispatch]);
  return (
    <div className="container p-2 reservations pt-5 mt-3">
      <h2 className="text-center">My Reservations</h2>
      {!auth && <p className="text-danger text-center">You need to sign in to continue.</p>}
      {(!reservations.length && auth) && <p className="text-danger text-center">No reservations yet.</p>}
      {(auth && reservations.length > 0) && (
        <Table striped className="me-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Aeroplane</th>
              <th>Start date</th>
              <th>End date</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res, index) => (
              <tr key={res.id}>
                <td>{index + 1}</td>
                <td>{res.aeroplane_name}</td>
                <td>{res.start_date}</td>
                <td>{res.end_date}</td>
                <td>{res.city}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Reservations;
