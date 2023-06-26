import React from 'react';
import styles from './Mast.module.scss';

interface IProps {
  id: number;
  camera: string;
  img_src: string;
}

export const Mast = ({ id, camera, img_src }: IProps) => {
  return (
    <div className={styles.marsImg}>
      <img className={styles.imgItem} src={img_src} alt="" />
    </div>
  );
};
