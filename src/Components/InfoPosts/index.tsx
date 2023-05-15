import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import Apod from './APOD.jpg';
import styles from './InfoPosts.module.scss';
import Arrow from './Arrow.png';
import MarsPhoto from './MarsPhoto.jpg';

export const InfoPosts = () => {
  return (
    <>
      <div className={styles.info_card}>
        <img src={Apod} alt="ApodPhoto" />
        <div className={styles.left_info}>
          <p>
            Discover the cosmos! Each day a different image or photograph of our fascinating
            universe is featured, along with a brief explanation written by a professional
            astronomer.
          </p>
          <Link to={routes.APOD}>
            astronomy picture of the day <img src={Arrow} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className={styles.info_card}>
        <img src={MarsPhoto} alt="MarsPhoto" />
        <div className={styles.left_info}>
          <p>
            Discover the cosmos! Each day a different image or photograph of our fascinating
            universe is featured, along with a brief explanation written by a professional
            astronomer.
          </p>
          <Link to={routes.GALLERY}>
            Mars rovers photo <img src={Arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};
