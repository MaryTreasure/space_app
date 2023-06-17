import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import styles from './PlanetsMenu.module.scss';

export const PlanetsMenu = () => {
  return (
    <div className={styles.topMenuBorder}>
      <div className={styles.topMenu}>
        <Link to={routes.PLANETS}>Mercury</Link>
        <Link to={routes.VENUS}>Venus</Link>
        <Link to={routes.EARTH}>Earth</Link>
        <Link to={routes.MARS}>Mars</Link>
        <Link to={routes.JUPITER}>Jupiter</Link>
        <Link to={routes.SATURN}>Saturn</Link>
        <Link to={routes.URANUS}>Uranus</Link>
        <Link to={routes.NEPTUN}>Neptun</Link>
      </div>
    </div>
  );
};
