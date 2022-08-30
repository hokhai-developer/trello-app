import { createSlice } from '@reduxjs/toolkit';
import { boards } from '~/utilities/initialData';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: boards,
  reducers: {
    updateColumOrderOneBoard: (state, actions) => {
      const { boardId, columnId } = actions.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      if (boardIndex !== -1) {
        state[boardIndex].columnOrder.push(columnId);
      } else {
        alert('board không tồn tại, thêm column thất bại');
      }
      return state;
    },
    deletedOneColumnOrderOneBoard: (state, actions) => {
      const { boardId, columnId } = actions.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      if (boardIndex !== -1) {
        const cardOrderIndex = state[boardIndex].columnOrder.findIndex(
          (item) => item === columnId,
        );
        state[boardIndex].columnOrder.splice(cardOrderIndex, 1);
      } else {
        alert('board không tồn tại, xoas column thất bại');
      }
      return state;
    },
    addNewBoard: (state, actions) => {
      const { boardId, boardTitle } = actions.payload;
      const newBoard = {
        id: boardId,
        title: boardTitle,
        columnOrder: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      state.push(newBoard);
      return state;
    },
    applyDragColum: (state, actions) => {
      const { addedIndex, removedIndex, boardId, columnId } = actions.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      if (boardIndex === -1) return state;
      if (addedIndex > removedIndex) {
        state[boardIndex].columnOrder.splice(addedIndex + 1, 0, columnId);
        state[boardIndex].columnOrder.splice(removedIndex, 1);
      } else {
        state[boardIndex].columnOrder.splice(removedIndex, 1);
        state[boardIndex].columnOrder.splice(addedIndex, 0, columnId);
      }
      return state;
    },
  },
});

export default boardsSlice;
