import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../ConfigureStore';

const getPostState = (state: TState) => state.post;

export const getPostSelector = createSelector(getPostState, ({ post }) => post.data);
export const getPostIsError = createSelector(getPostState, ({ post }) => post.isError);
export const getPostisSuccess = createSelector(getPostState, ({ post }) => post.isSuccess);
export const getPostisLoading = createSelector(getPostState, ({ post }) => post.isLoading);
