import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../../store/marsRoversData/fhaz/effects';
import styles from './FhazPage.module.scss';
import {
  getPhotoFhazIsError,
  getPhotoFhazIsLoading,
  getPhotoFhazIsSuccess,
  getPhotoFhazListSelector,
} from '../../../store/marsRoversData/fhaz/selectors';
import { Fhaz } from '../../../Components/Rovers/Fhaz';

export const FhazPage = () => {
  const dispatch = useDispatch();
  const photo = useSelector(getPhotoFhazListSelector);
  const isSuccess = useSelector(getPhotoFhazIsSuccess);
  const isError = useSelector(getPhotoFhazIsError);
  const isLoading = useSelector(getPhotoFhazIsLoading);

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
              <Fhaz key={id} camera={camera} img_src={img_src} id={id} />
            ))}
          {isLoading && <span className={styles.loading}>Loading...</span>}
          {isError && <span>Error</span>}
        </div>
      </div>
    </>
  );
};
