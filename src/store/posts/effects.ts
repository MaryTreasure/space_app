import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../utils/network';

export const getPost = createAsyncThunk('/apod', async (_, { rejectWithValue }) => {
  try {
    const response = await networkInstance.get(
      '/planetary/apod?api_key=w6jfr5ACNVli7PkeN9obJkDco7GZgolJtM4yv3Oz',
    );
    console.log(response);

    return response.data;
  } catch (e) {
    rejectWithValue(e);
  }
});
