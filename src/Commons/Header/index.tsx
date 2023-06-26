/* eslint-disable multiline-ternary */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import styles from './Header.module.scss';
import Logo from '../../images/header/solar_infinity-outline.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  const [nav, setNav] = useState(false);
  const classes = styles.left_menu + ' ' + styles.active;
  return (
    <>
      <header className={styles.main_menu}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
          <Link className={styles.main_logo} to={routes.MAIN}>
            space
          </Link>
        </div>

        <ul className={nav ? classes : styles.left_menu}>
          <li>
            <Link to={routes.INFOPAGE}>Home</Link>
          </li>
          <li>
            <Link to={routes.APOD}>Astronomy picture of the day</Link>
          </li>
          <li>
            <Link to={routes.MARSROVERS}>Mars rovers photo</Link>
          </li>
          <li>
            <Link to={routes.SOLARSYSTEM}>Solar System</Link>
          </li>
          <li>
            <Link to={routes.PLANETS}>Planets</Link>
          </li>
        </ul>
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className={styles.burger}
        >
          {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>
      </header>
    </>
  );
};
