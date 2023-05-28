import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import apod from '../../images/infoPosts/apod.jpg';
import styles from './InfoPosts.module.scss';
import arrow from '../../images/infoPosts/arrow.png';
import marsPhoto from '../../images/infoPosts/marsPhoto.jpg';

export const InfoPosts = () => {
  return (
    <>
      <div className={styles.info_card}>
        <img src={apod} alt="ApodPhoto" />
        <div className={styles.left_info}>
          <p>
            Discover the cosmos! Each day a different image or photograph of our fascinating
            universe is featured, along with a brief explanation written by a professional
            astronomer.
          </p>
          <Link to={routes.APOD}>
            astronomy picture of the day <img src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className={styles.info_card}>
        <img src={marsPhoto} alt="MarsPhoto" />
        <div className={styles.left_info}>
          <p>
            Discover the cosmos! Each day a different image or photograph of our fascinating
            universe is featured, along with a brief explanation written by a professional
            astronomer.
          </p>
          <Link to={routes.GALLERY}>
            Mars rovers photo <img src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};
