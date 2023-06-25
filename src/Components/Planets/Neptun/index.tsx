/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { LayoutsPlanets } from '../../../Commons/LayoutsPlanets';
import styles from '../PlanetsInfo.module.scss';
import NeptunMain from '../../../images/planets/neptun/neptun-main.png';
import Sky from '../../../images/planets/neptun/sky.jpg';
import NeptunImg from '../../../images/planets/neptun/neptun.jpg';

export const Neptun = () => {
  return (
    <LayoutsPlanets>
      <>
        <div className={styles.mainBlock}>
          <div className={styles.mainImg}><img src={NeptunMain} alt="arrow" /></div>
          <div className={styles.mainText}>
            <h2>Neptune</h2>
            <p>
              Neptune is a planet to this day practically unexplored, mainly because of its
              remoteness from us and inaccessibility. Its study at this stage of development of our
              civilization does not promise any economic benefits, so our research is mainly focused
              on Mars and the Moon. The study of the outer solar system remains the lot of
              individual scientists and just enthusiasts.
            </p>
          </div>
        </div>
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>4,55 bln km</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>year length</p>
            <p>60 190 Earth day</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>surface temperature</p>
            <p>−221.4 - -201.15 °C</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>planet type</p>
            <p>Ice Giant</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Medium radius</p>
            <p>24 622 ± 19 km</p>
          </div>
        </div>
        <h2 className={styles.factsHeader}>Top 10 facts about the planet</h2>
        <div className={styles.facts}>
          <div className={styles.factCard}>
            <h2>1</h2>
            <p>
              Neptune is the coldest planet in our system, the temperature here can drop to minus
              221 degrees Celsius.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>2</h2>
            <p>
              The planet Neptune was discovered by French scientists Johan C. Galle and Urban Le
              Verrier.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>3</h2>
            <p>
              In 2006, when the IAU decided to exclude Pluto from the solar system, Neptune received
              the title of "the most distant planet".
            </p>
          </div>
          <div className={styles.factCard}>
            <img src={Sky} alt="galaxy" />
          </div>

          <div className={styles.factCard}>
            <h2>4</h2>
            <p>
              The Voyager 2 spacecraft managed to pass 3 thousand kilometers from the north pole of
              the planet Neptune.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>5</h2>
            <p>
              The largest satellite, Triton, rotates in a retrograde orbit. This means that it
              rotates in the opposite direction compared to other moons orbiting the gas giant. It
              turns out that Triton was probably captured by the planet. Triton is always turned on
              one side, and slowly spirals towards the gas giant.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>6</h2>
            <p>
              Most likely, Neptune has a solid core, consisting of iron and magnesium, approximately
              equal in mass to our own planet.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>7</h2>
            <p>
              Among all the planets in the solar system, Neptune has the strongest winds. According
              to some estimates, their speeds can reach 2100 km / h.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>8</h2>
            <p>
              Clouds on Neptune rotate in the opposite direction of the planet's rotation. Why is
              unknown.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>9</h2>
            <p>
              Triton, Neptune's largest moon, has an atmosphere. Scientists do not rule out that a
              liquid ocean may be hiding under its icy crust.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>10</h2>
            <p>
              Due to its elliptical orbit, Pluto (formerly the ninth planet in the solar system, now
              a dwarf planet) is sometimes closer to the Sun than Neptune.
            </p>
          </div>
          <div className={styles.factCard}>
            <img src={NeptunImg} alt="planets" />
          </div>
        </div>
      </>
    </LayoutsPlanets>
  );
};
