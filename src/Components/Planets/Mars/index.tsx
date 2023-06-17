/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LayoutsPlanets } from '../../../Commons/LayoutsPlanets';
import styles from './Mars.module.scss';
import MarsMain from '../../../images/planets/mars/mars-main.png';
import MarsImg from '../../../images/planets/mars/mars.jpg';
import Landscape from '../../../images/planets/mars/landscape.jpg';

export const Mars = () => {
  return (
    <LayoutsPlanets>
      <>
        <div className={styles.mainBlock}>
          <img src={MarsMain} alt="arrow" />
          <div className={styles.mainText}>
            <h2>Mars</h2>
            <p>
              Today, Mars is one of the most popular planets - most of the attention of scientists
              and amateur astronomers is focused on it. Mars is our neighbor, and by space
              standards, the distance to it is small. It is well distinguishable in telescopes, and
              it is easy to send space missions to it. Mars has a very rarefied atmosphere and an
              extremely uneven surface. The planet has mountains, craters and valleys. Mars has two
              moons, Phobos and Deimos. It is believed that Phobos will sooner or later fall on Mars
              - every year it approaches the planet a short distance. Because someday Mars will
              destroy one of its satellites. But Deimos, most likely, will “run away” from his
              planet - he inevitably moves away from it
            </p>
          </div>
        </div>
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>228 mln km</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>year length</p>
            <p>686,98 Earth day</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>surface temperature</p>
            <p>−153 - +20 °C</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>planet type</p>
            <p>terrestrial</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Medium radius</p>
            <p>3389,5 ± 0,2 km</p>
          </div>
        </div>
        <h2 className={styles.factsHeader}>Top 10 facts about the planet</h2>
        <div className={styles.facts}>
          <div className={styles.factCard}>
            <h2>1</h2>
            <p>
              The age of Mars is approximately 4.65 billion years. The earth is a little younger.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>2</h2>
            <p>
              This planet has the highest mountain in the solar system. It's called Olympus. Its
              peak is located at a distance of 28 km from the surface.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>3</h2>
            <p>
              Mars is called the Red Planet because of the characteristic shade of the surface. All
              because of iron - rusty dust not only covers the planet itself, but also rises into
              the atmosphere. Hence its reddish-reddish color.
            </p>
          </div>
          <div>
            <img src={Landscape} alt="galaxy" />
          </div>
          <div className={styles.factCard}>
            <h2>4</h2>
            <p>
              There is water on Mars! Research vehicles have discovered layers of subsurface ice in
              the polar regions of the planet. It is possible that once there were real rivers and
              lakes on the Red Planet - many faults on its surface may be traces of water bodies
              that once existed.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>5</h2>
            <p>
              Mars currently has no global magnetic field. However, there are magnetized areas in
              its crust, indicating that the planet possessed it in the distant past.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>6</h2>
            <p>
              Martian sunrises and sunsets are the exact opposite of earthly ones. Because of the
              dust scattered in the atmosphere of the planet, they are painted in blue tones.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>7</h2>
            <p>
              It doesn't rain on Mars. The weather on the planet is such that it is either extremely
              hot or extremely cold. As a result, water instantly turns into steam or ice.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>8</h2>
            <p>
              Nobody knows who discovered Mars. The existence of the planet was known in ancient
              times. The earliest reference that has come down to our time refers to 1570 BC. e.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>9</h2>
            <p>
              On Mars, the force of gravity is much less than on our planet: only 38% of our
              gravity. So, walking through the Martian fields, you will feel lighter. Imagine that a
              person weighs 100 kg on Earth. Standing on the scales installed on Mars, he will see
              only 38 kg!
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>10</h2>
            <p>
              It takes about a year to fly to Mars. Now there is a lot of talk about manned
              expeditions to the Red Planet. In the near future, we are unlikely to witness such a
              mission, but why not find out how long it will take. The flight to Mars will take
              about 8 months.
            </p>
          </div>
          <div>
            <img src={MarsImg} alt="planets" />
          </div>
        </div>
      </>
    </LayoutsPlanets>
  );
};
