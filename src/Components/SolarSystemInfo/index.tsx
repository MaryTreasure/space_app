/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SolarSystem from '../../images/solarSystemInfo/planetsInSolarSystem.jpg';
import Galaxy from '../../images/solarSystemInfo/galaxy.jpg';
import Planets from '../../images/solarSystemInfo/planets.jpg';
import styles from './SolarSystemInfo.module.scss'

export const SolarSystemInfo = () => {
  return (
    <>
      <h1 className={styles.header}>Our Solar System</h1>
      <div className={styles.posterBlock}>
        <img src={SolarSystem} alt="Solar System" />
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>Planets/dwarf planets</p>
            <p>8/5</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Moons</p>
            <p>200+</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Asteroids</p>
            <p>1 290 000+</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Comets</p>
            <p>3 800+</p>
          </div>
        </div>
      </div>
      <div className={styles.mainInfo}>
        <p className={styles.leftPartMain}>
          The solar system is a group of eight planets and many other objects bound by gravity. At
          the center of our solar system is a star, the Sun. Our solar system is one of billions in
          the universe, but it is unique in that it is the only one we know of that contains life.
          Each planet has different characteristics that make it uninhabitable for humans, with the
          exception of Earth, of course.
        </p>
        <p>
          The planet Earth is part of the solar system, which is part of the Milky Way galaxy.
          Иetween all celestial bodies there is a force of attraction. This is how the sun holds the
          other planets. The planets do not glow on their own, but only reflect the light of the
          star. All planets revolve around their own axis and around the sun. The orbits of the
          planets are close to circles
        </p>
      </div>
      <h2 className={styles.factsHeader}>Top 10 facts about solar system</h2>
      <div className={styles.facts}>
        <div className={styles.factCard}>
          <h2>1</h2>
          <p>
            Judging by the presence of heavy metals on Earth, our solar system was formed from
            "recyclable materials" obtained from pre-existing and then exploded stars.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>2</h2>
          <p>
            As the Earth revolves around the Sun, so the solar system revolves around the center of
            the Galaxy, and it moves at a speed of 220-240 kilometers per second.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>3</h2>
          <p>
            Venus is the only planet in the solar system that rotates counterclockwise on its axis.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>4</h2>
          <p>The solar system was formed about 4.5 billion years ago.</p>
        </div>
        <div className={styles.factCard}>
          <h2>5</h2>
          <p>
            Jupiter protects our Earth from asteroids and meteorites - its powerful gravity attracts
            them, and they burn up in its atmosphere without reaching our planet.
          </p>
        </div>
        <div>
          <img src={Galaxy} alt="galaxy" />
        </div>
        <div className={styles.factCard}>
          <h2>6</h2>
          <p>
            The Oort cloud is a region of the solar system that serves as the source of a comet and
            a long period of revolution.
          </p>
        </div>
        <div>
          <img src={Planets} alt="planets" />
        </div>
        <div className={styles.factCard}>
          <h2>7</h2>
          <p>
            MIn 1802, the largest asteroid, with a diameter of 950 km, was Ceres. But on August 24,
            2006, it was recognized as a dwarf planet by the International Astronomical Union.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>8</h2>
          <p>
            Water in the form of ice is found on the ice giants Neptune and Uranus, in craters on
            Mercury and the Moon, and at the poles of Mars. Ice has also been found on the dwarf
            planet Ceres, Saturn's moon Enceladus, and even in comets and asteroids.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>9</h2>
          <p>
            Mercury is the smallest planet in the solar system with a diameter of only 4879 km (the
            diameter of the Earth is about 12,700 km). In 2016, it turned out that there is tectonic
            activity on Mercury. This means that the planet is still contracting.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>10</h2>
          <p>
            Not so long ago, scientists discovered organic matter on the surface of comet
            67P/Churyumov-Gerasimenko. This discovery reinforced the theory that life on our planet
            was introduced from outer space.
          </p>
        </div>
      </div>
    </>
  );
};
