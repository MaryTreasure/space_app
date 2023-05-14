import { createSlice } from '@reduxjs/toolkit';
import { getPost } from './effects';

interface IPostState {
  post: {
    data: any[];
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPostState = {
  post: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      return {
        ...state,
        post: { ...state.post, isLoading: true, isError: false, isSuccess: false },
      };
    });
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      return {
        ...state,
        post: { ...state.post, isLoading: false, isError: false, isSuccess: true, data: payload },
      };
    });
    builder.addCase(getPost.rejected, (state) => {
      return {
        ...state,
        post: { ...state.post, isLoading: false, isError: true, isSuccess: false, data: [] },
      };
    });
  },
});

export const { reducer: postDataReducer, name: postDataNameReducer } = slice;
