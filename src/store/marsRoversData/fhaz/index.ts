import { createSlice } from '@reduxjs/toolkit';
import { getPhoto } from './effects';

interface IPhotoState {
  fhazphoto: {
    data: any[],
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPhotoState = {
  fhazphoto: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'fhazphoto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhoto.pending, (state) => {
      return {
        ...state,
        fhazphoto: { ...state.fhazphoto, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getPhoto.fulfilled, (state, { payload }) => {
      return {
        ...state,
        fhazphoto: { ...state.fhazphoto, isLoading: false, isError: false, isSuccess: true, data: payload.photos },
      };
    });
    builder.addCase(getPhoto.rejected, (state) => {
      return {
        ...state,
        fhazphoto: { isLoading: false, isError: true, isSuccess: false, data: [] },
      };
    });
  },
});

export const { reducer: photoDataFhazReducer, name: photoDataFhazNameReducer } = slice;
