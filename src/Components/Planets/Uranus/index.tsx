/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { LayoutsPlanets } from '../../../Commons/LayoutsPlanets';
import styles from './Uranus.module.scss';
import UranusMain from '../../../images/planets/uranus/uranus-main.png';
import Sky from '../../../images/planets/uranus/sky.jpg';
import UranusImg from '../../../images/planets/uranus/uranus.jpg';

export const Uranus = () => {
  return (
    <LayoutsPlanets>
      <>
        <div className={styles.mainBlock}>
          <img src={UranusMain} alt="arrow" />
          <div className={styles.mainText}>
            <h2>Uranus</h2>
            <p>
              Very little studied and therefore mysterious Uranus is a planet that makes more than
              one generation of astronomers rack their brains. What is this bluish ice giant? So
              far, there is no answer ... So far, humanity has only scanty scraps of information
              about this mysterious planet. Uranus is a gas giant, a planet that consists mainly of
              hydrogen, helium and methane. Due to the low temperature and large accumulation of
              ice, it is often called an ice giant.
            </p>
          </div>
        </div>
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>2,8 bil km</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>year length</p>
            <p>30 687 Earth day</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>surface temperature</p>
            <p>−224 - -220 °C</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>planet type</p>
            <p>Ice Giant</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Medium radius</p>
            <p>25 362 ± 7 km</p>
          </div>
        </div>
        <h2 className={styles.factsHeader}>Top 10 facts about the planet</h2>
        <div className={styles.facts}>
          <div className={styles.factCard}>
            <h2>1</h2>
            <p>
              The atmosphere of Uranus consists mainly of hydrogen and helium, with a few percent
              methane.
            </p>
          </div>
          <div>
            <img src={Sky} alt="galaxy" />
          </div>

          <div className={styles.factCard}>
            <h2>2</h2>
            <p>
              The average distance of Uranus from the Sun is 2.8 billion km. Therefore, it makes one
              revolution around the star in 84 Earth years. The planet has a change of seasons, and
              in 2007 it passed the vernal equinox (for the northern hemisphere).
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>3</h2>
            <p>
              Monstrous storms periodically rage on the surface of Uranus, covering an area the size
              of the North American continent.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>4</h2>
            <p>
              Most of the satellites of Uranus were discovered in 1986 during the flyby of the
              spacecraft Voyager 2.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>5</h2>
            <p>
              Neptune is further from the Sun than Uranus. And the average temperature on it is
              lower than that of its neighbor. But the coldest place on the surface is on the
              seventh planet. These are the lower layers of the atmosphere.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>6</h2>
            <p>
              Of all the giant planets in our system, only Uranus emits less heat than it receives
              from the Sun.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>7</h2>
            <p>
              Uranus has nine inner rings and two outer ones. This is the second well-defined ring
              system found in the Solar System after Saturn.
            </p>
          </div>
          <div>
            <img src={UranusImg} alt="planets" />
          </div>

          <div className={styles.factCard}>
            <h2>8</h2>
            <p>
              Uranus rotates around its axis, "lying on its side", as its axis is tilted 99 degrees.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>9</h2>
            <p>
              The largest moon of Uranus is Titania, its diameter is about half that of the moon.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>10</h2>
            <p>Sunlight takes about three hours to reach Uranus.</p>
          </div>
        </div>
      </>
    </LayoutsPlanets>
  );
};
