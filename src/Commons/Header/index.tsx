/* eslint-disable multiline-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import styles from './Header.module.scss';
import Logo from '../../images/header/solar_infinity-outline.png';

export const Header = () => {
  return (
    <>
      <header className={styles.main_menu}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
          <Link className={styles.main_logo} to={routes.MAIN}>
            space
          </Link>
        </div>

        <div className={styles.left_menu}>
          <Link to={routes.APOD}>Astronomy picture of the day</Link>
          <Link to={routes.GALLERY}>Mars rovers photo</Link>
          <Link to={routes.SOLARSYSTEM}>Solar System</Link>
          <Link to={routes.PLANETS}>Planets</Link>
        </div>
      </header>
    </>
  );
};
