import React, { useEffect } from 'react';
import { Gallery } from '../../Components/Gallery';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../store/galleryData/effects';
import styles from './GalleryPage.module.scss';
import { Link } from 'react-router-dom';
import Arrow from './Arrow.png';
import {
  getPhotoIsError,
  getPhotoIsLoading,
  getPhotoIsSuccess,
  getPhotoListSelector,
} from '../../store/galleryData/selectors';
import { routes } from '../../utils/constants/routes';

export const GalleryPage = () => {
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
      <Link className={styles.back_button} to={routes.INFOPAGE}>
        <img src={Arrow} alt="" /> Take me home
      </Link>
      <div>
        <h1 className={styles.heading}>View of Mars from rover</h1>
        <div className={styles.mars_img}>
          {isSuccess &&
            photo.length > 0 &&
            photo.map(({ id, camera, img_src }) => (
              <Gallery key={id} camera={camera} img_src={img_src} id={id} />
            ))}
          {isLoading && <span>Loading...</span>}
          {isError && <span>Error</span>}
        </div>
      </div>
    </>
  );
};
