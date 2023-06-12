/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './KuiperBeltInfo.module.scss';
import KuiperBelt from '../../images/kuiperBeltInfo/kuiperBelt.jpg';
import Galaxy from '../../images/kuiperBeltInfo/galaxy.jpg';
import Stars from '../../images/kuiperBeltInfo/stars.jpg';

export const KuiperBeltInfo = () => {
  return (
    <>
      <h1 className={styles.header}>Kuiper Belt</h1>
      <div className={styles.posterBlock}>
        <img src={KuiperBelt} alt="Solar System" />
        <div className={styles.posterText}>
          <div>
            <p className={styles.posterTextHeader}>Was opend</p>
            <p>1992</p>
          </div>
          <div>
            <p className={styles.posterTextHeader}>distance from the sun</p>
            <p>30- 55 astronomical units</p>
          </div>
        </div>
      </div>
      <div className={styles.mainInfo}>
        <p className={styles.leftPartMain}>
          The Kuiper belt is a disk-shaped region of the solar system located beyond the orbit of
          Neptune. It extends approximately 30 to 55 astronomical units from the Sun. The Kuiper
          belt contains millions of icy bodies that are thought to be remnants from the formation of
          the solar system. Despite the huge size of the belt, the total mass of all objects in it
          is only about 10% of the mass of the Earth.
        </p>
        <p>
          The Kuiper belt is a region in the solar system that begins beyond Neptune. But scientists
          at the moment do not know where it ends. We don't know what's going on at the outer edge
          of the Kuiper Belt or where it is, but we do know that it's very far away: some discovered
          Kuiper Belt objects have unusual orbits that are 2,000 times greater than the distance
          between the Earth and the Sun. The Kuiper belt is also considered to be the source of
          comets.
        </p>
      </div>
      <h2 className={styles.factsHeader}>Top 10 facts about Kuiper Belt</h2>
      <div className={styles.facts}>
        <div>
          <img src={Galaxy} alt="galaxy" />
        </div>
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
            The distance separating it from the Sun is about 55 times greater than the distance from
            the Earth to our star.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>3</h2>
          <p>
            The difference from the asteroid belt lies in the composition of objects. In the main
            belt, almost all of them are composed mainly of rock with an admixture of metals and
            ice, and in the Kuiper belt, most of them have an ice base, usually covered with a layer
            of regolith.
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
            Some Kuiper belt objects, like Sedna, are considered by a number of scientists as dwarf
            planets, although they do not yet have this status officially.
          </p>
        </div>

        <div className={styles.factCard}>
          <h2>6</h2>
          <p>
            It is known that the Kuiper belt is made up of millions of icy planetesimals, but no one
            knows yet how these bodies got to where they are now.
          </p>
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
            Kuiper belt. According to scientists, it can contain more than 70 thousand objects with
            a diameter of more than 100 km, and up to 450 thousand objects with a diameter of more
            than 50 km.
          </p>
        </div>
        <div className={styles.factCard}>
          <h2>10</h2>
          <p>
            The minor planets of the Kuiper belt are called the names of gods from the mythology of
            different peoples. For example, Orc is the god of death in the Etruscan pantheon
          </p>
        </div>
        <div>
          <img src={Stars} alt="planets" />
        </div>
      </div>
    </>
  );
};
