import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import arrow from '../../images/infoPosts/arrow.png';
import solarSystem from '../../images/solarSystem/solarSystem.jpg';
import sun from '../../images/solarSystem/sun.jpg';
import kuiperBelt from '../../images/solarSystem/kuiperBelt.jpg';
import styles from './SolarSystem.module.scss';

export const SolarSystem = () => {
  return (
    <>
      <h1 className={styles.header}>Solar System</h1>
      <div className={styles.block}>
        <div className={styles.textBlock}>
          <h2>Our Solar System</h2>
          <p>
            The solar system is our slice of space, the only area where we can navigate that we can
            study with the help of satellites, and not just observe through a telescope.
          </p>
          <Link className={styles.link} to={routes.SOLARSYSTEMINFO}>
            Learn more <img src={arrow} alt="arrow" />
          </Link>
        </div>
        <img src={solarSystem} alt="solarSystem" />
      </div>
      <div className={styles.block}>
        <img src={sun} alt="sun" />
        <div className={styles.textBlock}>
          <h2>Sun</h2>
          <p>
            People realized long ago that life on Earth would not exist. They observed the Sun and,
            creating observatories, solved such questions as why the Sun shines during the day, what
            is the nature of the star, when the Sun sets, where it rises, what objects are around
            it, and planned their activities based on the data received.
          </p>
          <Link className={styles.link} to={routes.SUNINFO}>
          Learn more <img src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.textBlock}>
          <h2>Kuiper Belt</h2>
          <p>
            The region of the solar system beyond the orbit of Neptune. It extends at distances of
            30 - 55 AU. from the sun. The first objects in the Kuiper belt were discovered in 1992,
            with the exception of the discovery of Pluto in 1930.
          </p>
          <Link className={styles.link} to={routes.KUIPERBELTINFO}>
          Learn more <img src={arrow} alt="arrow" />
          </Link>
        </div>
        <img src={kuiperBelt} alt="kuiperBelt" />
      </div>
    </>
  );
};
