import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import styles from './PlanetsMenu.module.scss';

export const PlanetsMenu = () => {
  return (
    <div className={styles.topMenuBorder}>
      <ul className={styles.topMenu}>
        <li>
          <NavLink
            to={routes.PLANETS}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Mercury
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.VENUS}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Venus
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.EARTH}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Earth
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.MARS}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Mars
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.JUPITER}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Jupiter
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.SATURN}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Saturn
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.URANUS}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Uranus
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.NEPTUN}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Neptun
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
