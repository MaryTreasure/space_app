/* eslint-disable no-constant-condition */
import React from 'react';
import styles from './PictureOfDay.module.scss';

interface IProps {
  url: string;
  title: string;
  date: string;
  explanation: string;
  mediaType: string;
}

export const PictureOfDayContent = ({ url, title, date, explanation, mediaType }: IProps) => {
  // eslint-disable-next-line no-return-assign
  return (
    <>
      <div className={styles.content}>
        { mediaType === 'video'
          ? (
            <>
          <iframe className={styles.video} src={url}></iframe>
          <p>{mediaType}</p>
          </>
            )
          : (
          <img className={styles.picture} src={url} alt="" />
            )}

        <div>
          <h3 className={styles.heading}>{title}</h3>
          <p className={styles.text}>{date}</p>
          <p className={styles.text}>{explanation}</p>
        </div>
      </div>
    </>
  );
};
