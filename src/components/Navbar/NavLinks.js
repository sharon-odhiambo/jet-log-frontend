/* eslint-disable */
import { NavLink } from 'react-router-dom';
import logo from '../../logo/jet-log/png/logo-color.png';

const NavLinks = ({ isOpen, setIsOpen }) => (
  <ul className="holder">
    <li className="logo-holder">
      <img src={logo} alt="Logo" className="logo" />
    </li>
    <li>
      <NavLink to="/" className="link" onClick={() => setIsOpen(!isOpen)}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/make-reservation"
        className="link"
        onClick={() => setIsOpen(!isOpen)}
      >
        Make a reservation
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/my-reservations"
        className="link"
        onClick={() => setIsOpen(!isOpen)}
      >
        My Reservations
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/add-plane"
        className="link"
        onClick={() => setIsOpen(!isOpen)}
      >
        Add a Plane
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/delete-plane"
        className="link"
        onClick={() => setIsOpen(!isOpen)}
      >
        Delete a Plane
      </NavLink>
    </li>
  </ul>
);

export default NavLinks;
