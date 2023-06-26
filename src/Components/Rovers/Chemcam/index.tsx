import React from 'react';
import styles from './Chemcam.module.scss';

interface IProps {
  id: number;
  camera: string;
  img_src: string;
}

export const Chemcam = ({ id, camera, img_src }: IProps) => {
  return (
    <div className={styles.marsImg}>
      <img className={styles.imgItem} src={img_src} alt="" />
    </div>
  );
};
