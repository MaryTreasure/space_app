import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../../store/marsRoversData/chemcam/effects';
import styles from './GalleryPage.module.scss';
import { Link } from 'react-router-dom';
import arrow from '../../images/btnToHome/arrow.png';
import {
  getPhotoCehmcamIsError,
  getPhotoCehmcamIsLoading,
  getPhotoCehmcamIsSuccess,
  getPhotoCehmcamListSelector,
} from '../../../store/marsRoversData/chemcam/selectors';
import { routes } from '../../../utils/constants/routes';
import { Chemcam } from '../../../Components/Rovers/Chemcam';

export const ChemcamPage = () => {
  const dispatch = useDispatch();
  const photo = useSelector(getPhotoCehmcamListSelector);
  const isSuccess = useSelector(getPhotoCehmcamIsSuccess);
  const isError = useSelector(getPhotoCehmcamIsError);
  const isLoading = useSelector(getPhotoCehmcamIsLoading);

  useEffect(() => {
    dispatch(getPhoto());
  }, []);

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.heading}>View of Mars from rover</h1>
        <div className={styles.mars_img}>
          {isSuccess &&
            photo.length > 0 &&
            photo.map(({ id, camera, img_src }) => (
              <Chemcam key={id} camera={camera} img_src={img_src} id={id} />
            ))}
          {isLoading && <span className={styles.loading}>Loading...</span>}
          {isError && <span>Error</span>}
        </div>
      </div>
    </>
  );
};
