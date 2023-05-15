import { createSlice } from '@reduxjs/toolkit';
import { getPhoto } from './effects';

interface IPhotoState {
  photo: {
    data: any[],
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPhotoState = {
  photo: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhoto.pending, (state) => {
      return {
        ...state,
        photo: { ...state.photo, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getPhoto.fulfilled, (state, { payload }) => {
      return {
        ...state,
        photo: { ...state.photo, isLoading: false, isError: false, isSuccess: true, data: payload.photos },
      };
    });
    builder.addCase(getPhoto.rejected, (state) => {
      return {
        ...state,
        photo: { isLoading: false, isError: true, isSuccess: false, data: [] },
      };
    });
  },
});

export const { reducer: photoDataReducer, name: photoDataNameReducer } = slice;
