import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import styles from './marsrovers.module.scss';
import rover from '../../images/marsRovers/rover.jpg';

export const MarsRovers = () => {
  return (
    <>
      <h1 className={styles.heading}>Mars rovers photo</h1>
      <div className={styles.mainBlock}>
        <p className={styles.text}>
          Here you can see real photos from the surface of Mars, which are collected by NASA rovers.
          Each rover has its own set of photos. Select the rover to see photos taken with it
        </p>
        <div className={styles.poster}>
          <img src={rover} alt="rover" />
        </div>
      </div>
      <h2 className={styles.listHeading}>Choose a camera to see Mars</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to={routes.MAST}>Mast Camera</Link>
        </li>
        <li className={styles.listItem}>
          <Link to={routes.CHEMCAM}>Chemistry and Camera Complex</Link>
        </li>
        <li className={styles.listItem}>
          <Link to={routes.FHAZ}>Front Hazard Avoidance Camera</Link>
        </li>
        <li className={styles.listItem}>
          <Link to={routes.MAHLI}>Mars Hand Lens Imager</Link>
        </li>
      </ul>
    </>
  );
};
