import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import apod from '../../images/infoPosts/apod.jpg';
import styles from './InfoPosts.module.scss';
import arrow from '../../images/infoPosts/arrow.png';
import marsPhoto from '../../images/infoPosts/marsPhoto.jpg';
import planets from '../../images/infoPosts/planets.jpg';
import solarSystem from '../../images/infoPosts/solarSystem.jpg';

export const InfoPosts = () => {
  return (
    <>
      <div className={styles.info_card}>
        <div className={styles.info_card_img}><img src={apod} alt="ApodPhoto" /></div>
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
        <div className={styles.info_card_img}><img src={marsPhoto} alt="MarsPhoto" /></div>
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
      <div className={styles.info_card}>
        <div className={styles.info_card_img}><img src={solarSystem} alt="Solar system" /></div>
        <div className={styles.left_info}>
          <p>
            The solar system formed almost five billion years ago. It all started with a rotating
            cloud of dust and gas. The center of the cloud began to collapse, forming the Sun. Due
            to the collision of the surrounding material, eight planets were formed.
          </p>
          <Link to={routes.SOLARSYSTEM}>
            Solar system <img src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className={styles.info_card}>
        <div className={styles.info_card_img}><img src={planets} alt="Planets" /></div>
        <div className={styles.left_info}>
          <p>
            The solar system is a planetary system that includes the central star - the Sun - and
            all natural space objects that revolve around the Sun. It was formed by gravitational
            compression of a gas and dust cloud approximately 4.57 billion years ago. The sun is not
            a planet.
          </p>
          <Link to={routes.PLANETS}>
            Planets <img src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};
