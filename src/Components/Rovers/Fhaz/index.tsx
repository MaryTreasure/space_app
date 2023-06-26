import React from 'react';
import styles from './Fhaz.module.scss';

interface IProps {
  id: number;
  camera: string;
  img_src: string;
}

export const Fhaz = ({ id, camera, img_src }: IProps) => {
  return (
    <div className={styles.marsImg}>
      <img className={styles.imgItem} src={img_src} alt="" />
    </div>
  );
};
