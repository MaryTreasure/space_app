import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../ConfigureStore';

const getPhotoState = (state: TState) => state.photo;

export const getPhotoListSelector = createSelector(getPhotoState, ({ photo }) => photo.data);
export const getPhotoIsError = createSelector(getPhotoState, ({ photo }) => photo.isError);
export const getPhotoIsSuccess = createSelector(getPhotoState, ({ photo }) => photo.isSuccess);
export const getPhotoIsLoading = createSelector(getPhotoState, ({ photo }) => photo.isLoading);
