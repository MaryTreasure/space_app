/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './SunInfo.module.scss';
import SunBig from '../../images/SunPage/sunBig.jpg';
import SunSmall from '../../images/SunPage/sunSmall.jpg';
import Eclipce from '../../images/SunPage/eclipse.jpg';

export const SunInfo = () => {
  return (
    <>
      <h1 className={styles.header}>SUN</h1>
      <div className={styles.posterBlock}>
        <img src={SunBig} alt="Solar System" />
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>Age</p>
            <p>~ 4.5 billion years</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Star-type</p>
            <p>Yellow Dwarf</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Distance from Galactic center</p>
            <p>26 000 light year</p>
          </div>
        </div>
      </div>
      <div className={styles.mainInfo}>
        <p className={styles.leftPartMain}>
          Looking at a cozy and familiar yellow ball in the blue sky, we rarely think about what it
          really is. The Sun is not a yellow “bulb” in the sky, it is an unimaginably gigantic ball
          of hot plasma, rushing at breathtaking speed through the Galaxy.
        </p>
        <p>
          The Sun is a giant plasma ball, located at a distance of about 150 million km from us,
          inside which thermonuclear reactions take place. Our star is in the middle of its life
          cycle. Its surface temperature is 5780 Kelvin. Therefore, the spectrum of its radiation is
          almost white. Yellowish color occurs when its rays pass through the earth's atmosphere.
          Therefore, the Sun is actually larger than 90 percent of the stars in its environment. In
          addition, it acts as a benchmark.
        </p>
      </div>
      <h2 className={styles.factsHeader}>Top 10 facts about Sun</h2>
      <div className={styles.facts}>
        <div className={styles.factCard}>
          <h2>1</h2>
          <p>
            There is liquid on the Sun. Namely, water, and there is much more of it than on Earth.
            True, due to high temperatures, it exists on the star only in the form of steam.
          </p>
        </div>
        <div>
          <img src={SunSmall} alt="galaxy" />
        </div>
        <div className={styles.factCard}>
          <h2>2</h2>
          <p>
            The temperature of the Sun's surface (photosphere) is 5500°C. The temperature of the
            core is 15 million degrees Celsius. The Sun also has an outer atmosphere, and its
            temperature is about 2,000,000°C, and sometimes even 20,000,000°C.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>3</h2>
          <p>
            Judging by the average lifespan of a G2 star, the current age of the Sun is estimated at
            4.6 billion years, that is, half a lifetime.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>4</h2>
          <p>The Sun's gravity is about twenty-eight times greater than the Earth's.</p>
        </div>
        <div className={styles.factCard}>
          <h2>5</h2>
          <p>Light travels from the Sun to the Earth in eight minutes.</p>
        </div>

        <div className={styles.factCard}>
          <h2>6</h2>
          <p>The mass of the Sun is 99.8% of the total mass of the entire solar system.</p>
        </div>

        <div className={styles.factCard}>
          <h2>7</h2>
          <p>
            In about a billion and a hundred million years, the brightness of the Sun will increase
            by ten percent, which will entail the end of all life on Earth.
          </p>
        </div>
        <div>
          <img src={Eclipce} alt="planets" />
        </div>
        <div className={styles.factCard}>
          <h2>8</h2>
          <p>
            The sun revolves around the center of the Milky Way just like the earth revolves around
            the sun. The period of rotation of the Sun around the center of our galaxy is
            approximately 240 million years.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>9</h2>
          <p>The Sun's magnetic field is only twice as strong as the Earth's.</p>
        </div>
        <div className={styles.factCard}>
          <h2>10</h2>
          <p>
            It was not until 1992 that the Vatican publicly acknowledged that the Earth does indeed
            revolve around the Sun.
          </p>
        </div>
      </div>
    </>
  );
};
