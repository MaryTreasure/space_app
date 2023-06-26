import React from 'react';
import styles from './Main.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';

export const MainInfo = () => {
  return (
    <>
      <div className={styles.mainPage}>
        <h1 className={styles.mainHeader}>Space</h1>
      </div>
      <Link className={styles.mainBtn} to={routes.INFOPAGE}>See into the stars!</Link>
    </>
  );
};
