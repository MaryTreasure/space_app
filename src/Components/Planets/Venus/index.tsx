/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LayoutsPlanets } from '../../../Commons/LayoutsPlanets';
import styles from '../PlanetsInfo.module.scss'
import VenusImg from '../../../images/planets/venus/venus-main.png';
import Galaxy from '../../../images/planets/venus/galaxy.jpg';
import Sky from '../../../images/planets/venus/sky.jpg';

export const Venus = () => {
  return (
    <LayoutsPlanets>
      <>
        <div className={styles.mainBlock}>
          <div className={styles.mainImg}><img src={VenusImg} alt="arrow" /></div>
          <div className={styles.mainText}>
            <h2>Venus</h2>
            <p>
              Venus is the second most distant planet in the solar system. Of all the planets, only
              her and Uranus have retrograde motion (movement around the Sun, opposite to the
              movement of other planets, so that in one Venusian year, the sunrise and sunset occur
              only twice). The atmosphere of Venus contains clouds of sulfuric acid, which make it
              impossible to observe the surface in visible light, and is transparent only in the
              radio and microwave bands, as well as in certain parts of the near infrared region.
            </p>
          </div>
        </div>
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>108 mln km</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>year length</p>
            <p>224.7 Earth day</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>surface temperature</p>
            <p>−173 - +127 °C</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>planet type</p>
            <p>terrestrial</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>Medium radius</p>
            <p>6051,8 ± 1,0 km</p>
          </div>
        </div>
        <h2 className={styles.factsHeader}>Top 10 facts about the planet</h2>
        <div className={styles.facts}>
          <div className={styles.factCard}>
            <h2>1</h2>
            <p>
              The surface of Venus is hidden by such dense clouds that no rays of the visible part
              of the spectrum penetrate through them.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>2</h2>
            <p>The mass of the Venusian atmosphere is 93 times greater than that of the earth.</p>
          </div>
          <div className={styles.factCard}>
            <h2>3</h2>
            <p>
              Venus is the hottest planet in the solar system, despite being much further from the
              Sun than Mercury.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>4</h2>
            <p>
              All craters on Venus have a diameter of at least two kilometers, since only large
              meteorites can reach the surface of the planet through the dense Venusian atmosphere,
              while the rest crumble and burn.
            </p>
          </div>
          <div className={styles.factCard}>
            <img src={Galaxy} alt="galaxy" />
          </div>
          <div className={styles.factCard}>
            <h2>5</h2>
            <p>
              The first landing of an unmanned spacecraft on Venus was carried out in 1970 by a
              Soviet probe.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>6</h2>
            <p>
              The temperature on the surface of Venus reaches 475 degrees Celsius, which is higher
              than the melting point of lead.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>7</h2>
            <p>
              Venus is the most similar planet in size to the Earth, its diameter is only 640
              kilometers smaller than the Earth's.
            </p>
          </div>

          <div className={styles.factCard}>
            <h2>8</h2>
            <p>Sulfuric acid rains on Venus.</p>
          </div>
          <div className={styles.factCard}>
            <img src={Sky} alt="planets" />
          </div>
          <div className={styles.factCard}>
            <h2>9</h2>
            <p>
              Very strong winds blow on Venus. Because of this, the clouds completely circle in 4
              days.
            </p>
          </div>
          <div className={styles.factCard}>
            <h2>10</h2>
            <p>
              A typical Venusian landscape - mountains and rocky deserts, shrouded in eternal
              darkness.
            </p>
          </div>
        </div>
      </>
    </LayoutsPlanets>
  );
};
