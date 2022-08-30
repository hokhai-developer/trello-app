import { createSlice } from '@reduxjs/toolkit';

const currentIdBoardSlice = createSlice({
  name: 'currentIdBoard',
  initialState: {
    id: 'board-1',
  },
  reducers: {
    set: (state, actions) => {
      const { boardId } = actions.payload;
      if (boardId) {
        state.id = boardId;
      }
    },
  },
});

export default currentIdBoardSlice;
