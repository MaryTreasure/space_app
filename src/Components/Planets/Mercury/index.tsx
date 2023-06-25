import React from 'react';
import MercuryImg from '../../../images/planets/mercury/mercury.png';
import styles from '../PlanetsInfo.module.scss';
import Planet from '../../../images/planets/mercury/planet.jpg';
import Sky from '../../../images/planets/mercury/sky.jpg';
import { LayoutsPlanets } from '../../../Commons/LayoutsPlanets';

export const Mercury = () => {
  return (
    <LayoutsPlanets>
      <>
        <div className={styles.mainBlock}>
          <div className={styles.mainImg}><img src={MercuryImg} alt="arrow" /></div>
          <div className={styles.mainText}>
            <h2>Mercury</h2>
            <p>
              Mercury, the closest planet to the Sun, is a big mystery among the other terrestrial
              planets. There is a close relationship between the size of a planet and its density.
              Mercury is a much denser planet than it should be: its core is about the size of the
              Moon, while it should be much smaller inside. Scientists believe that this is due to
              the formation of the planet, and have been trying to solve this riddle for many years.
            </p>
          </div>
        </div>
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>57,91 mln km</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>year length</p>
            <p>88 Earth day</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>surface temperature</p>
            <p>−190 - +430 °C</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>planet type</p>
            <p>terrestrial</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Medium radius</p>
            <p>2439,7 ± 1,0 km</p>
          </div>
        </div>
        <h2 className={styles.factsHeader}>Top 10 facts about the planet</h2>
        <div className={styles.facts}>
          <div className={styles.factCard}>
            <h2>1</h2>
            <p>
              If we try to describe the Kuiper belt in simple terms, then we can say that it is
              generally similar to the asteroid belt located between the orbits of Jupiter and Mars.
              But the Kuiper belt is at the same time 20 times wider, and at least 200 times more in
              mass.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>2</h2>
            <p>
              The distance separating it from the Sun is about 55 times greater than the distance
              from the Earth to our star.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>3</h2>
            <p>
              The difference from the asteroid belt lies in the composition of objects. In the main
              belt, almost all of them are composed mainly of rock with an admixture of metals and
              ice, and in the Kuiper belt, most of them have an ice base, usually covered with a
              layer of regolith.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>4</h2>
            <p>
              Many Kuiper belt objects are in orbital resonance with Neptune, despite their
              considerable distance from this gas giant. There are already several hundred known.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>5</h2>
            <p>
              Some Kuiper belt objects, like Sedna, are considered by a number of scientists as
              dwarf planets, although they do not yet have this status officially.
            </p>
          </div>
          <div className={styles.factCard}>
            <img src={Planet} alt="galaxy" />
          </div>

          <div className={styles.factCard}>
            <h2>6</h2>
            <p>
              It is known that the Kuiper belt is made up of millions of icy planetesimals, but no
              one knows yet how these bodies got to where they are now.
            </p>
          </div>
          <div className={styles.factCard}>
            <img src={Sky} alt="planets" />
          </div>

          <div className={styles.factCard}>
            <h2>7</h2>
            <p>
              Pluto is the largest of the Kuiper belt objects. Another dwarf planet, Eris, is almost
              as large as it is, and until 2015, scientists even believed that Eris was larger than
              it, but recent studies have shown that this is not the case.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>8</h2>
            <p>
              Previously, it was believed that it was from here that numerous comets enter the inner
              part of the solar system. Modern science, however, believes that this is not so, and
              that comets come from the Oort cloud.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>9</h2>
            <p>
              To date, more than 1070 sufficiently large objects have already been discovered in the
              Kuiper belt. According to scientists, it can contain more than 70 thousand objects
              with a diameter of more than 100 km, and up to 450 thousand objects with a diameter of
              more than 50 km.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>10</h2>
            <p>
              The minor planets of the Kuiper belt are called the names of gods from the mythology
              of different peoples. For example, Orc is the god of death in the Etruscan pantheon
            </p>
          </div>
        </div>
      </>
    </LayoutsPlanets>
  );
};
