import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';

export const MarsRovers = () => {
  return (
    <>
      <Link to={routes.MAST}>MAST rover</Link>
      <Link to={routes.CHEMCAM}>Chemistry and Camera Complex</Link>
      <Link to={routes.FHAZ}>Front Hazard Avoidance Camera</Link>
      <Link to={routes.MAHLI}>Mars Hand Lens Imager</Link>
    </>
  );
};
