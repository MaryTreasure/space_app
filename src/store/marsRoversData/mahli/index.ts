import { createSlice } from '@reduxjs/toolkit';
import { getPhoto } from './effects';

interface IPhotoState {
  mahliphoto: {
    data: any[],
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPhotoState = {
  mahliphoto: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'mahliphoto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhoto.pending, (state) => {
      return {
        ...state,
        mahliphoto: { ...state.mahliphoto, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getPhoto.fulfilled, (state, { payload }) => {
      return {
        ...state,
        mahliphoto: { ...state.mahliphoto, isLoading: false, isError: false, isSuccess: true, data: payload.photos },
      };
    });
    builder.addCase(getPhoto.rejected, (state) => {
      return {
        ...state,
        mahliphoto: { isLoading: false, isError: true, isSuccess: false, data: [] },
      };
    });
  },
});

export const { reducer: photoDataMahliReducer, name: photoDataMahliNameReducer } = slice;
