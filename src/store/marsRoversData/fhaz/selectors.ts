import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../../ConfigureStore';

const getPhotoState = (state: TState) => state.fhazphoto;

export const getPhotoFhazListSelector = createSelector(getPhotoState, ({ fhazphoto }) => fhazphoto.data);
export const getPhotoFhazIsError = createSelector(getPhotoState, ({ fhazphoto }) => fhazphoto.isError);
export const getPhotoFhazIsSuccess = createSelector(getPhotoState, ({ fhazphoto }) => fhazphoto.isSuccess);
export const getPhotoFhazIsLoading = createSelector(getPhotoState, ({ fhazphoto }) => fhazphoto.isLoading);
