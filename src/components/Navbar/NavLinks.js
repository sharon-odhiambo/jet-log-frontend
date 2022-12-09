/* eslint-disable */
import { NavLink } from 'react-router-dom';
import logo from '../../logo/jet-log/png/logo-color.png';
import {
  FaGoogle,
  FaGithub,
  FaPinterest,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

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
    <li className="user-auth-links">
      <NavLink to="/login" className="link" onClick={() => setIsOpen(!isOpen)}>
        Login
      </NavLink>
      <NavLink to="/signup" className="link" onClick={() => setIsOpen(!isOpen)}>
        Signup
      </NavLink>
      <NavLink to="/logout" className="link" onClick={() => setIsOpen(!isOpen)}>
        Logout
      </NavLink>
    </li>
    <li className="social-links">
      <FaGoogle className="social-icon" />
      <FaGithub className="social-icon" />
      <FaPinterest className="social-icon" />
      <FaTwitter className="social-icon" />
      <FaFacebook className="social-icon" />
    </li>
    <li className="footer-date">
      <p>2022 Microverse</p>
    </li>
  </ul>
);

export default NavLinks;
