import { createSlice } from '@reduxjs/toolkit';
import { cards } from '~/utilities/initialData';

const cardSlice = createSlice({
  name: 'board',
  initialState: cards,
  reducers: {},
});

export default cardSlice;
