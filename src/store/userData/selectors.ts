import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../ConfigureStore';

const getUserData = (state: TState) => state.userData;

export const getUserEmail = createSelector(getUserData, ({ email }) => email);
export const getUserName = createSelector(getUserData, ({ name }) => name);
export const getUserToken = createSelector(getUserData, ({ token }) => token);
