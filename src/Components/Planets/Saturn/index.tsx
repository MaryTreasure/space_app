/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LayoutsPlanets } from '../../../Commons/LayoutsPlanets';
import styles from './Saturn.module.scss';
import SaturnMain from '../../../images/planets/saturn/saturn-main.png';
import SaturnImg from '../../../images/planets/saturn/saturn.jpg';
import Asteroids from '../../../images/planets/saturn/asteroids.jpg';

export const Saturn = () => {
  return (
    <LayoutsPlanets>
      <>
        <div className={styles.mainBlock}>
          <img src={SaturnMain} alt="arrow" />
          <div className={styles.mainText}>
            <h2>Saturn</h2>
            <p>
              Saturn is the sixth planet from the Sun and is named after the Roman god of
              agriculture. The unusual appearance of this celestial body has long attracted the
              attention of astronomers. Saturn's main attraction is its rings. In fact, all giant
              planets have them, but only Saturn has them so bright that they can be observed with
              an amateur telescope. Actually, they were the first to be seen by Galileo, who first
              looked at the sky through a telescope.
            </p>
          </div>
        </div>
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>1430 mln km</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>year length</p>
            <p>10 759 Earth day</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>surface temperature</p>
            <p>−173 - +57 °C</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>planet type</p>
            <p>Gas Giant</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Medium radius</p>
            <p>58 232 ± 6 km</p>
          </div>
        </div>
        <h2 className={styles.factsHeader}>Top 10 facts about the planet</h2>
        <div className={styles.facts}>
          <div className={styles.factCard}>
            <h2>1</h2>
            <p>On Saturn, as well as on the planet Earth, there are seasons.</p>
          </div>

          <div className={styles.factCard}>
            <h2>2</h2>
            <p>
              Saturn is the farthest planet in the solar system that can be clearly seen in the sky
              with the naked eye (Uranus is only visible in very dark skies with good vision).
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>3</h2>
            <p>
              There are 53 satellites orbiting around it, and there are probably more of them, just
              not all of them have been discovered yet.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>4</h2>
            <p>
              On one of the satellites of Saturn, Enceladus, the existence of aquatic life forms
              under the thickness of ice is theoretically allowed.
            </p>
          </div>
          <div>
            <img src={SaturnImg} alt="galaxy" />
          </div>

          <div className={styles.factCard}>
            <h2>5</h2>
            <p>
              Saturn is not exactly spherical. The speed of its rotation is so great that it
              flattens itself.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>6</h2>
            <p>Saturn is considered to be the lowest density planet in the entire solar system.</p>
          </div>

          <div className={styles.factCard}>
            <h2>7</h2>
            <p>
              If you lower Saturn into water, he will be able to swim on it, because its density is
              2 times lower than water.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>8</h2>
            <p>
              If you lower Saturn into water, he will be able to swim on it, because its density is
              2 times lower than water.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>9</h2>
            <p>
              The speed of rotation of Saturn around its axis is faster than that of any other
              planet in the solar system.
            </p>
          </div>
          <div>
            <img src={Asteroids} alt="planets" />
          </div>
          <div className={styles.factCard}>
            <h2>10</h2>
            <p>Clouds of a strange hexagonal shape have been repeatedly observed on Saturn.</p>
          </div>
        </div>
      </>
    </LayoutsPlanets>
  );
};
