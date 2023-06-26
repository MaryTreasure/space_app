import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../../ConfigureStore';

const getPhotoState = (state: TState) => state.mahliphoto;

export const getPhotoMahliListSelector = createSelector(getPhotoState, ({ mahliphoto }) => mahliphoto.data);
export const getPhotoMahliIsError = createSelector(getPhotoState, ({ mahliphoto }) => mahliphoto.isError);
export const getPhotoMahliIsSuccess = createSelector(getPhotoState, ({ mahliphoto }) => mahliphoto.isSuccess);
export const getPhotoMahliIsLoading = createSelector(getPhotoState, ({ mahliphoto }) => mahliphoto.isLoading);
