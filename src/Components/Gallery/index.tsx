import React from 'react';
import styles from './Gallery.module.scss';

interface IProps {
  id: number;
  camera: string;
  img_src: string;
}

export const Gallery = ({ id, camera, img_src }: IProps) => {
  return (
    <div>
      <img className={styles.img_item} src={img_src} alt="" />
    </div>
  );
};
