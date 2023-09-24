import React, { useEffect } from 'react';
import { PictureOfDayContent } from '../../Components/PictureOfDayContent';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/posts/effects';
import styles from './PictureOfDay.module.scss'
import {
  getPostIsError,
  getDate,
  getExplanation,
  getTitle,
  getUrl,
  getPostisLoading,
  getPostisSuccess,
  getMediaType,
} from '../../store/posts/selectors';

export const PictureOfDayPage = () => {
  const dispatch = useDispatch();

  const url = useSelector(getUrl);
  const date = useSelector(getDate);
  const title = useSelector(getTitle);
  const mediaType = useSelector(getMediaType);
  const explanation = useSelector(getExplanation);
  const isSuccess = useSelector(getPostisSuccess);
  const isError = useSelector(getPostIsError);
  const isLoading = useSelector(getPostisLoading);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div>
      {isSuccess && (
        <PictureOfDayContent url={url} title={title} date={date} explanation={explanation} mediaType={mediaType}/>
      )}
      {isLoading && <span className={styles.loading}>Loading...</span>}
      {isError && <span>Error</span>}
    </div>
  );
};
