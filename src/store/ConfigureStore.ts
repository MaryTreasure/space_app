import { configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './userData';
import { postDataNameReducer, postDataReducer } from './posts';
import { photoDataNameReducer, photoDataReducer } from './galleryData';

export const store = configureStore({
  reducer: {
    [userDataNameReducer]: userDataReducer,
    [postDataNameReducer]: postDataReducer,
    [photoDataNameReducer]: photoDataReducer,
  },
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
