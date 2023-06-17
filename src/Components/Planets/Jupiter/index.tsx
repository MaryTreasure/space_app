/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LayoutsPlanets } from '../../../Commons/LayoutsPlanets';
import styles from './Jupiter.module.scss';
import JupiterMain from '../../../images/planets/jupiter/jupiter-main.png';
import JupiterImg from '../../../images/planets/jupiter/jupiter.jpg';
import Sky from '../../../images/planets/jupiter/sky.jpg';

export const Jupiter = () => {
  return (
    <LayoutsPlanets>
      <>
        <div className={styles.mainBlock}>
          <img src={JupiterMain} alt="arrow" />
          <div className={styles.mainText}>
            <h2>Jupiter</h2>
            <p>
              Jupiter is the largest planet in our solar system, a gas giant whose size is hard to
              imagine. Thanks to the Hubble Space Telescope, we know that there are larger planets
              in the Universe, but they are somewhere infinitely far away, and Jupiter is here.
              People have not yet reached it, of course, but research probes regularly transmit to
              Earth a lot of interesting information about the most impressive celestial body in our
              system.
            </p>
          </div>
        </div>
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>778,57 mln km</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>year length</p>
            <p>4333 Earth day</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>surface temperature</p>
            <p>-163 °C</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>planet type</p>
            <p>Gas Giant</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Medium radius</p>
            <p>69 911 ± 6 km</p>
          </div>
        </div>
        <h2 className={styles.factsHeader}>Top 10 facts about the planet</h2>
        <div className={styles.facts}>
          <div>
            <img src={Sky} alt="galaxy" />
          </div>
          <div className={styles.factCard}>
            <h2>1</h2>
            <p>
              If Jupiter were a little more massive, it could become not a planet, but a protostar -
              a brown dwarf.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>2</h2>
            <p>
              Storms and hurricanes on Jupiter are frequent phenomena, but they usually do not last
              long, three or four days.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>3</h2>
            <p>Jupiter's core temperature is about twenty thousand degrees Celsius.</p>
          </div>

          <div className={styles.factCard}>
            <h2>4</h2>
            <p>
              The pressure in the depths of Jupiter's atmosphere is so monstrous that even electrons
              are compressed in hydrogen atoms.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>5</h2>
            <p>It rains diamonds on Jupiter.</p>
          </div>

          <div className={styles.factCard}>
            <h2>6</h2>
            <p>A Jupiter day lasts only about 10 hours, but a year is almost 12 years.</p>
          </div>
          <div>
            <img src={JupiterImg} alt="planets" />
          </div>

          <div className={styles.factCard}>
            <h2>7</h2>
            <p>
              Jupiter, like Saturn, has five rings. True, they are not at all as impressive as those
              of his neighbor.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>8</h2>
            <p>
              On Jupiter's moon Europa, there is supposedly an ocean of liquid water under a layer
              of icy surface.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>9</h2>
            <p>Like other known giant planets, Jupiter does not have a solid surface.</p>
          </div>
          <div className={styles.factCard}>
            <h2>10</h2>
            <p>
              Jupiter is larger in diameter than all the other planets in the solar system combined.
            </p>
          </div>
        </div>
      </>
    </LayoutsPlanets>
  );
};
