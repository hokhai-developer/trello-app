import { createSlice } from '@reduxjs/toolkit';
import { cards } from '~/utilities/initialData';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cards,
  reducers: {
    addNewCard: (state, actions) => {
      const { boardId, cardId, cardTitle, columnId } = actions.payload;
      const newCard = {
        id: cardId,
        boardId,
        columnId,
        title: cardTitle,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      state.push(newCard);
    },
  },
});

export default cardsSlice;
