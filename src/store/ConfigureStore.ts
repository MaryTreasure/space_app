import { configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './userData';
import { postDataNameReducer, postDataReducer } from './posts';

export const store = configureStore({
  reducer: {
    [userDataNameReducer]: userDataReducer,
    [postDataNameReducer]: postDataReducer,
  },
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
