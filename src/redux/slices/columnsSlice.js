import { createSlice } from '@reduxjs/toolkit';
import { columns } from '~/utilities/initialData';

const columnsSlice = createSlice({
  name: 'columns',
  initialState: columns,
  reducers: {
    addNewColumn: (state, actions) => {
      const { boardId, title, id } = actions.payload;
      const column = {
        title,
        id,
        boardId,
        cardOrder: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      state.push(column);
      return state;
    },
    deleteColumn: (state, actions) => {
      const { boardId, columnId } = actions.payload;
      const columnIndex = state.findIndex(
        (column) => column.id === columnId && column.boardId === boardId,
      );
      if (columnIndex !== -1) {
        state.splice(columnIndex, 1);
      } else {
        alert('không tìm thấy columns của board, xóa column thất bại');
      }
      return state;
    },
    updateTitleColumn: (state, actions) => {
      const { boardId, columnId, titleColumn } = actions.payload;
      const columnIndex = state.findIndex(
        (column) => column.id === columnId && column.boardId === boardId,
      );
      if (columnIndex !== -1) {
        state[columnIndex].title = titleColumn;
        state[columnIndex].updatedAt = Date.now();
      } else {
        alert('không tìm thấy columns của board, update title column thất bại');
      }
      return state;
    },
    updateCardOrder: (state, actions) => {
      const { boardId, columnId, cardId } = actions.payload;
      const columnIndex = state.findIndex(
        (column) => column.id === columnId && column.boardId === boardId,
      );
      if (columnIndex !== -1) {
        state[columnIndex].cardOrder.push(cardId);
      } else {
        alert(
          'không tìm thấy columns của board, update cardOrder cua column thất bại',
        );
      }
      return state;
    },
    applyDragCardOrder: (state, actions) => {
      const { addedIndex, removedIndex, cardId, columId } = actions.payload;
      const columnIndex = state.findIndex((column) => column.id === columId);
      if (columId === -1) {
        alert('khong tim thay colum hien tai');
        return state;
      }
      if (addedIndex === null) {
        state[columnIndex].cardOrder.splice(removedIndex, 1);
        return state;
      }
      if (removedIndex === null) {
        state[columnIndex].cardOrder.splice(addedIndex, 0, cardId);
        return state;
      }
      if (removedIndex < addedIndex) {
        state[columnIndex].cardOrder.splice(addedIndex + 1, 0, cardId);
        state[columnIndex].cardOrder.splice(removedIndex, 1);
        return state;
      } else {
        state[columnIndex].cardOrder.splice(removedIndex, 1);
        state[columnIndex].cardOrder.splice(addedIndex, 0, cardId);
        return state;
      }
      // state[columnIndex].cardOrder.splice
    },
  },
});

export default columnsSlice;
