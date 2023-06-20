import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';

export const Navbar = () => {
  return (
    <>
      <ul>
        <li><Link to={routes.INFOPAGE}>Home</Link></li>
        <li><Link to={routes.APOD}>Astronomy picture of the day</Link></li>
        <li><Link to={routes.GALLERY}>Mars rovers photo</Link></li>
        <li><Link to={routes.SOLARSYSTEM}>Solar System</Link></li>
        <li><Link to={routes.PLANETS}>Planets</Link></li>
      </ul>
    </>
  );
};
