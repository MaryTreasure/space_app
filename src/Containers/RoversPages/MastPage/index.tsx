import React, { useEffect } from 'react';
import { Mast } from '../../../Components/Rovers/Mast';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../../store/galleryData/effects';
import styles from './MastPage.module.scss';
import { Link } from 'react-router-dom';
import arrow from '../../images/btnToHome/arrow.png';
import {
  getPhotoIsError,
  getPhotoIsLoading,
  getPhotoIsSuccess,
  getPhotoListSelector,
} from '../../../store/galleryData/selectors';
import { routes } from '../../../utils/constants/routes';

export const MastPage = () => {
  const dispatch = useDispatch();
  const photo = useSelector(getPhotoListSelector);
  const isSuccess = useSelector(getPhotoIsSuccess);
  const isError = useSelector(getPhotoIsError);
  const isLoading = useSelector(getPhotoIsLoading);

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
              <Mast key={id} camera={camera} img_src={img_src} id={id} />
            ))}
          {isLoading && <span className={styles.loading}>Loading...</span>}
          {isError && <span>Error</span>}
        </div>
      </div>
    </>
  );
};
