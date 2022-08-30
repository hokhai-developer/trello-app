import { configureStore } from '@reduxjs/toolkit';
import boardsSlice from './slices/boardsSlice';
import cardsSlice from './slices/cardsSlice';
import columnsSlice from './slices/columnsSlice';
import currentIdBoardSlice from './slices/currentIdBoardSlice';

const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
    columns: columnsSlice.reducer,
    cards: cardsSlice.reducer,
    currentIdBoard: currentIdBoardSlice.reducer,
  },
});

export default store;
