import React from 'react';
import styles from './PictureOfDay.module.scss';
import { Link } from 'react-router-dom';
import Arrow from '../../images/btnToHome/arrow.png';
import { routes } from '../../utils/constants/routes';

interface IProps {
  url: string;
  title: string;
  date: string;
  explanation: string;
}

export const PictureOfDayContent = ({ url, title, date, explanation }: IProps) => {
  return (
    <>
    <Link className={styles.back_button} to={routes.INFOPAGE}>
    <img src={Arrow} alt="" /> Take me home
  </Link>
    <div className={styles.content}>
      <img className={styles.picture} src={url} alt="" />
      <div>
        <h3 className={styles.heading}>{title}</h3>
        <p>{date}</p>
        <p>{explanation}</p>
      </div>
    </div>
    </>
  );
};
