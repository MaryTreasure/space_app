import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import styles from './Header.module.scss';
import Logo from './solar_infinity-outline.png';
import { useSelector } from 'react-redux';
import { getUserEmail, getUserName, getUserToken } from '../../store/userData/selectors';

export const Header = () => {
  const email = useSelector(getUserEmail);
  const name = useSelector(getUserName);
  const token = useSelector(getUserToken);
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
          <Link to={routes.APOD}>astronomy picture of the day</Link>
          <Link to={routes.PHOTO}>Mars rovers photo</Link>
          {token
            ? <button className={styles.auth}>Log out</button>
            : <Link className={styles.auth} to={routes.AUTH}>
              Log in
            </Link>
          }
        </div>
      </header>
    </>
  );
};
