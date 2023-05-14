/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { PictureOfDayContent } from '../../Components/PictureOfDayContent';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/posts/effects';
import {
  getPostIsError,
  getPostSelector,
  getPostisLoading,
  getPostisSuccess,
} from '../../store/posts/selectors';


export const PictureOfDayPage = () => {
  const dispatch = useDispatch();

  const post = useSelector(getPostSelector);
  const isSuccess = useSelector(getPostisSuccess);
  const isError = useSelector(getPostIsError);
  const isLoading = useSelector(getPostisLoading);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div> hi
      {isSuccess && <PictureOfDayContent url={''} title={''} date={''} explanation={''} />}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
    </div>
  );
};
