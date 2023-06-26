import React from 'react';
import styles from './Mast.module.scss';

interface IProps {
  id: number;
  camera: string;
  img_src: string;
}

export const Mast = ({ id, camera, img_src }: IProps) => {
  return (
    <div className={styles.mars_img}>
      <img className={styles.img_item} src={img_src} alt="" />
    </div>
  );
};
