import { createSlice } from '@reduxjs/toolkit';
import { getPhoto } from './effects';

interface IPhotoState {
  cehmcamphoto: {
    data: any[],
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPhotoState = {
  cehmcamphoto: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'cehmcamphoto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhoto.pending, (state) => {
      return {
        ...state,
        cehmcamphoto: { ...state.cehmcamphoto, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getPhoto.fulfilled, (state, { payload }) => {
      return {
        ...state,
        cehmcamphoto: { ...state.cehmcamphoto, isLoading: false, isError: false, isSuccess: true, data: payload.photos },
      };
    });
    builder.addCase(getPhoto.rejected, (state) => {
      return {
        ...state,
        cehmcamphoto: { isLoading: false, isError: true, isSuccess: false, data: [] },
      };
    });
  },
});

export const { reducer: photoDataChemcamReducer, name: photoDataChemcamNameReducer } = slice;
