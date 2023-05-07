import React, { useEffect } from 'react';
import styles from './Main.module.scss';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';

export const MainInfo = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Ubuntu']
      }
    });
  }, []);
  return (
    <>
      <div className={styles.main_page}>
        <h1>Space</h1>
      </div>
      <Link className={styles.main_btn} to={routes.INFOPAGE}>See into the stars!</Link>
    </>
  );
};
