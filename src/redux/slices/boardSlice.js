import { createSlice } from '@reduxjs/toolkit';
import { boards } from '~/utilities/initialData';

const boardSlice = createSlice({
  name: 'board',
  initialState: boards,
  reducers: {},
});

export default boardSlice;
