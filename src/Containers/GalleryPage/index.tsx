import React, { useEffect } from 'react';
import { Gallery } from '../../Components/Gallery';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../store/galleryData/effects';
import {
  getPhotoIsError,
  getPhotoIsLoading,
  getPhotoIsSuccess,
  getPhotoListSelector,
} from '../../store/galleryData/selectors';

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
    <div>
      {isSuccess &&
        photo.length > 0 &&
        photo.map(({ id, camera, img_src }) => (
          <Gallery key={id} camera={camera} img_src={img_src} id={id} />
        ))}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
    </div>
  );
};
