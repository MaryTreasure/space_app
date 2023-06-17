import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import styles from './PlanetsMenu.module.scss';

export const PlanetsMenu = () => {
  return (
    <div className={styles.topMenuBorder}>
      <div className={styles.topMenu}>
        <Link to={routes.PLANETS}>Mercury</Link>
        <Link to={routes.PLANETS}>Venus</Link>
        <Link to={routes.PLANETS}>Earth</Link>
        <Link to={routes.PLANETS}>Mars</Link>
        <Link to={routes.PLANETS}>Jupiter</Link>
        <Link to={routes.PLANETS}>Saturn</Link>
        <Link to={routes.PLANETS}>Uranus</Link>
        <Link to={routes.PLANETS}>Neptun</Link>
      </div>
    </div>
  );
};
