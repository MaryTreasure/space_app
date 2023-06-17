/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LayoutsPlanets } from '../../../Commons/LayoutsPlanets';
import styles from './Earth.module.scss';
import EarthMain from '../../../images/planets/earth/earth-main.png';
import EarthDark from '../../../images/planets/earth/earth-dark.jpg';
import EarthImg from '../../../images/planets/earth/earth.jpg';

export const Earth = () => {
  return (
    <LayoutsPlanets>
      <>
        <div className={styles.mainBlock}>
          <img src={EarthMain} alt="arrow" />
          <div className={styles.mainText}>
            <h2>Earth</h2>
            <p>
              Planet Earth, in addition to being the home of humanity, is also the only known place
              in the universe where life exists. Every year people learn something new about the
              Earth, and even the oldest person in the world does not know all its secrets and
              mysteries. Earth is the only planet in the solar system that has an oxygen atmosphere,
              liquid water oceans, and biological life. In total, there are four Earth-like planets
              in the solar system - in addition to the Earth, these are Mercury, Venus and Mars. On
              the surface of each of them there are rocks.
            </p>
          </div>
        </div>
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>150 mln km</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>year length</p>
            <p>365,24 Earth day</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>surface temperature</p>
            <p>−89,2 - +56,7 °C</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>planet type</p>
            <p>terrestrial</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Medium radius</p>
            <p>6371 km</p>
          </div>
        </div>
        <h2 className={styles.factsHeader}>Top 10 facts about the planet</h2>
        <div className={styles.facts}>
          <div className={styles.factCard}>
            <h2>1</h2>
            <p>
              A day is not 24 hours, as we used to think, but a little less: 23 hours, 56 minutes
              and 4 seconds. These are the so-called "sidereal days", corresponding to the real
              period of the Earth's rotation around its axis. The cumulative difference of a few
              minutes is offset by extra days in leap years.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>2</h2>
            <p>
              Contrary to popular belief, the Great Wall of China is not visible from space, but air
              pollution over the Celestial Empire is clearly visible.
            </p>
          </div>
          <div>
            <img src={EarthDark} alt="galaxy" />
          </div>
          <div className={styles.factCard}>
            <h2>3</h2>
            <p>
              The earth is not a sphere! More precisely, not a perfect ball. Due to the daily
              rotation, it is flattened from the poles, therefore, in geodesy and astronautics, our
              planet is called not a ball, but an ellipsoid or geoid - that's more precise.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>4</h2>
            <p>
              The age of the Earth is 4.54 billion years. Scientists have established the age of our
              planet by dating the oldest rocks and meteorites that fell to Earth even when the
              solar system was just being formed.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>5</h2>
            <p>
              The strongest earthquake in the history of observations - a magnitude of 9.5 on the
              Richter scale - occurred on May 22, 1960 in Chile.
            </p>
          </div>
          <div>
            <img src={EarthImg} alt="planets" />
          </div>

          <div className={styles.factCard}>
            <h2>6</h2>
            <p>
              The hottest place on Earth is located in the city of El Aziliya (Libya). On September
              13, 1922, a temperature of 57.8 degrees Celsius was recorded there!
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>7</h2>
            <p>Every 200,000 to 300,000 years, the magnetic poles change places.</p>
          </div>

          <div className={styles.factCard}>
            <h2>8</h2>
            <p>
              The Earth also had a second satellite. Moon 2 had a diameter of about 1,200 km. Her
              "life" ended tragically - she flew into our moon. Most likely, this is why the two
              sides of our current satellite are so different from each other.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>9</h2>
            <p>
              The largest living structure on Earth is coral reefs. Some corals are visible even
              from space.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>10</h2>
            <p>The deepest point in the ocean is in the Mariana Trench - 10,916 m.</p>
          </div>
        </div>
      </>
    </LayoutsPlanets>
  );
};
