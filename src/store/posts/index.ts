import { createSlice } from '@reduxjs/toolkit';
import { getPost } from './effects';

interface IPostState {
  post: {
    date: string;
    url: string;
    title: string;
    explanation: string;
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPostState = {
  post: {
    date: '',
    url: '',
    title: '',
    explanation: '',
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
        post: { ...state.post, isLoading: false, isError: false, isSuccess: true, date: payload.date, url: payload.url, title: payload.title, explanation: payload.explanation },
      };
    });
    builder.addCase(getPost.rejected, (state) => {
      return {
        ...state,
        post: { ...state.post, isLoading: false, isError: true, isSuccess: false, date: '' },
      };
    });
  },
});

export const { reducer: postDataReducer, name: postDataNameReducer } = slice;
