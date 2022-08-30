import { createSelector } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

export const boardsSelector = (state) => state.boards;
export const columnSelector = (state) => state.columns;
export const cardsSelector = (state) => state.cards;
export const currentIdBoardSelector = (state) => state.currentIdBoard.id;

export const currentBoardSelector = createSelector(
  boardsSelector,
  columnSelector,
  cardsSelector,
  currentIdBoardSelector,
  (boards, columns, cards, currentIdBoard) => {
    const currentBoardWithId = boards.find(
      (board) => board.id === currentIdBoard,
    );
    if (currentBoardWithId === undefined || isEmpty(currentBoardWithId))
      return {};

    //them property [columns] cho board
    const fullBoard = Object.assign({}, currentBoardWithId, {
      columns: [],
    });
    if (fullBoard.columnOrder.length === 0) return fullBoard;

    const currentColumnsOfBoard = fullBoard.columnOrder.map((columnId) => {
      return columns.find((column) => column.id === columnId);
    });
    if (currentColumnsOfBoard.length === 0) return fullBoard;

    //them property [cards] cho columns
    const fullColumns = currentColumnsOfBoard.map((column) => {
      if (column?.cards) return;
      return Object.assign({}, column, {
        cards: column.cardOrder.map((cardId) => {
          return cards.find((card) => card.id === cardId);
        }),
      });
    });
    fullBoard.columns = fullColumns;
    return fullBoard;
  },
);
