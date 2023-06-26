import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../../utils/network';

export const getPhoto = createAsyncThunk('/fhaz', async (_, { rejectWithValue }) => {
  try {
    const response = await networkInstance.get(
      'mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-04-15&camera=fhaz&api_key=w6jfr5ACNVli7PkeN9obJkDco7GZgolJtM4yv3Oz',
    );
    console.log(response);

    return response.data;
  } catch (e) {
    rejectWithValue(e);
  }
});
