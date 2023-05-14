/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { PictureOfDayContent } from '../../Components/PictureOfDayContent';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/posts/effects';
import {
  getPostIsError,
  getDate,
  getExplanation,
  getTitle,
  getUrl,
  getPostisLoading,
  getPostisSuccess,
} from '../../store/posts/selectors';

export const PictureOfDayPage = () => {
  const dispatch = useDispatch();

  const url = useSelector(getUrl);
  const date = useSelector(getDate);
  const title = useSelector(getTitle);
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
        <PictureOfDayContent url={url} title={title} date={date} explanation={explanation} />
      )}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
    </div>
  );
};
