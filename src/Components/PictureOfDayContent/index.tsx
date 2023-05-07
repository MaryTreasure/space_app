import React from 'react';
import DayPicture from './DayPicture.jpg'
import styles from './PictureOfDay.module.scss'

export const PictureOfDayContent = () => {
  return (
    <div className={styles.content}>
      <img className={styles.picture} src={DayPicture} alt="" />
      <div>
        <h3 className={styles.heading}>Solar Eclipse from a Ship</h3>
        <p>2023-04-29</p>
        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
      </div>
    </div>
  );
};
