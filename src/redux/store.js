import { configureStore } from '@reduxjs/toolkit';
import boardsSlice from './slices/boardsSlice';

const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
  },
});

export default store;
