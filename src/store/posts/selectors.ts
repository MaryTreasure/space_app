import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../ConfigureStore';

const getPostState = (state: TState) => state.post;

export const getUrl = createSelector(getPostState, ({ post }) => post.url);
export const getTitle = createSelector(getPostState, ({ post }) => post.title);
export const getDate = createSelector(getPostState, ({ post }) => post.date);
export const getExplanation = createSelector(getPostState, ({ post }) => post.explanation);
export const getPostIsError = createSelector(getPostState, ({ post }) => post.isError);
export const getPostisSuccess = createSelector(getPostState, ({ post }) => post.isSuccess);
export const getPostisLoading = createSelector(getPostState, ({ post }) => post.isLoading);
