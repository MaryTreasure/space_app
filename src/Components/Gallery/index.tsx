import React from 'react';

interface IProps {
  id: number;
  camera: string;
  img_src: string;
}

export const Gallery = ({ id, camera, img_src }: IProps) => {
  return (
    <div>
      <img src={img_src} alt="" />
      <p></p>
    </div>
  )
};
