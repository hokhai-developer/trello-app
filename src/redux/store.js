import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './slices/boardSlice';
import columnSlice from './slices/columnSlice';
import cardSlice from './slices/cardSlice';

const store = configureStore({
  reducer: {
    boards: boardSlice.reducer,
    columns: columnSlice.reducer,
    cards: cardSlice.reducer,
  },
});

export default store;
