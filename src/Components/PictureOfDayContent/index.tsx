import React from 'react';
import styles from './PictureOfDay.module.scss';

interface IProps {
  url: string;
  title: string;
  date: string;
  explanation: string;
}

export const PictureOfDayContent = ({ url, title, date, explanation }: IProps) => {
  return (
    <div className={styles.content}>
      <img className={styles.picture} src={url} alt="" />
      <div>
        <h3 className={styles.heading}>{title}</h3>
        <p>{date}</p>
        <p>{explanation}</p>
      </div>
    </div>
  );
};
