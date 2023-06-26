import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../../store/marsRoversData/mahli/effects';
import styles from './MahliPage.module.scss';
import {
  getPhotoMahliIsError,
  getPhotoMahliIsLoading,
  getPhotoMahliIsSuccess,
  getPhotoMahliListSelector,
} from '../../../store/marsRoversData/mahli/selectors';
import { Mahli } from '../../../Components/Rovers/Mahli';

export const MahliPage = () => {
  const dispatch = useDispatch();
  const photo = useSelector(getPhotoMahliListSelector);
  const isSuccess = useSelector(getPhotoMahliIsSuccess);
  const isError = useSelector(getPhotoMahliIsError);
  const isLoading = useSelector(getPhotoMahliIsLoading);

  useEffect(() => {
    dispatch(getPhoto());
  }, []);

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.heading}>View of Mars from rover</h1>
        <div className={styles.marsImg}>
          {isSuccess &&
            photo.length > 0 &&
            photo.map(({ id, camera, img_src }) => (
              <Mahli key={id} camera={camera} img_src={img_src} id={id} />
            ))}
          {isLoading && <span className={styles.loading}>Loading...</span>}
          {isError && <span>Error</span>}
        </div>
      </div>
    </>
  );
};
