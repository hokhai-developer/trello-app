import { createSlice } from '@reduxjs/toolkit';
import { boards } from '~/utilities/initialData';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: [...boards],
  reducers: {
    addNewBoard: (state, actions) => {
      const { boardTitle, boardId } = actions.payload;
      const newBoard = {
        title: boardTitle,
        id: boardId,
        columnOrder: [],
        columns: [],
        createdAt: Date.now(),
        deleted: false,
      };
      state.push(newBoard);
    },
    addNewColumn: (state, actions) => {
      const { boardId, id, title } = actions.payload;
      if (!boardId || !id || !title) return state; //show case error
      const currentIndex = state.findIndex((item) => item.id === boardId);
      if (currentIndex !== -1) {
        const newColumn = {
          id,
          boardId,
          title,
          createdAt: Date.now(),
          updatedAt: false,
          cardOrder: [],
          cards: [],
          deleted: false,
        };
        state[currentIndex].columnOrder.push(id);
        state[currentIndex].columns.push(newColumn);
        return state;
      }
    },
    updateTitleColumn: (state, actions) => {
      console.log(actions);
      const { boardId, columnId, titleColumn } = actions.payload;
      if (!boardId || !columnId || !titleColumn) return state;
      const currentIndex = state.findIndex((item) => item.id === boardId);
      if (currentIndex !== -1) {
        const columnIndex = state[currentIndex].columns.findIndex(
          (item) => item.id === columnId,
        );
        if (columnIndex !== -1) {
          state[currentIndex].columns[columnIndex].title = titleColumn;
          state[currentIndex].columns[columnIndex].updatedAt = Date.now();
        }
        return state;
      }
    },
    addNewCard: (state, actions) => {
      const { boardId, cardId, cardTitle, columnId } = actions.payload;
      if (!boardId || !cardId || !cardTitle || !columnId) return state;
      const boardIndex = state.findIndex((item) => item.id === boardId);
      if (boardIndex === -1) return state;
      const columnIndex = state[boardIndex].columns.findIndex(
        (item) => item.id === columnId,
      );
      if (columnIndex === -1) return state;
      state[boardIndex].columns[columnIndex].cardOrder.push(cardId.toString());
      const newCard = {
        id: cardId,
        columnId,
        boardId,
        title: cardTitle,
        cover: null,
        createdAt: Date.now(),
        updatedAt: false,
      };
      state[boardIndex].columns[columnIndex].cards.push(newCard);
    },
    deleteColumns: (state, actions) => {
      const { columnId, boardId } = actions.payload;
      if (!columnId || !boardId) return state;
      const boardIndex = state.findIndex((item) => item.id === boardId);
      if (boardIndex === -1) return state;
      const columnIndex = state[boardIndex].columns.findIndex(
        (item) => item.id === columnId,
      );
      if (columnIndex === -1) return state;
      // const indexColumOrder = state[boardIndex].columnOrder.findIndex(
      //   (item) => item.toString() === columnId.toString(),
      // );
      // if (indexColumOrder !== -1) {
      //   state[boardIndex].columnOrder.splice(indexColumOrder, 1);
      // }
      state[boardIndex].columns[columnIndex].deleted = true;
      state[boardIndex].columns.splice(columnIndex, 1);
      return state;
    },
  },
});

export default boardsSlice;
