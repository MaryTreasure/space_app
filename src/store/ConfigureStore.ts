import { configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './userData';
import { postDataNameReducer, postDataReducer } from './posts';
import { photoDataNameReducer, photoDataReducer } from './galleryData';
import { photoDataChemcamReducer, photoDataChemcamNameReducer } from './marsRoversData/chemcam';
import { photoDataFhazReducer, photoDataFhazNameReducer } from './marsRoversData/fhaz';
import { photoDataMahliReducer, photoDataMahliNameReducer } from './marsRoversData/mahli';

export const store = configureStore({
  reducer: {
    [userDataNameReducer]: userDataReducer,
    [postDataNameReducer]: postDataReducer,
    [photoDataNameReducer]: photoDataReducer,
    [photoDataChemcamNameReducer]: photoDataChemcamReducer,
    [photoDataFhazNameReducer]: photoDataFhazReducer,
    [photoDataMahliNameReducer]: photoDataMahliReducer,
  },
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
