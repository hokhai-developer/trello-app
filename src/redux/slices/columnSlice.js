import { createSlice } from '@reduxjs/toolkit';
import { columns } from '~/utilities/initialData';

const columnSlice = createSlice({
  name: 'board',
  initialState: columns,
  reducers: {},
});

export default columnSlice;
