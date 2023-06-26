import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../../ConfigureStore';

const getPhotoState = (state: TState) => state.cehmcamphoto;

export const getPhotoCehmcamListSelector = createSelector(getPhotoState, ({ cehmcamphoto }) => cehmcamphoto.data);
export const getPhotoCehmcamIsError = createSelector(getPhotoState, ({ cehmcamphoto }) => cehmcamphoto.isError);
export const getPhotoCehmcamIsSuccess = createSelector(getPhotoState, ({ cehmcamphoto }) => cehmcamphoto.isSuccess);
export const getPhotoCehmcamIsLoading = createSelector(getPhotoState, ({ cehmcamphoto }) => cehmcamphoto.isLoading);
