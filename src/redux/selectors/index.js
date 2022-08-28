import { createSelector } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

export const boardsSelector = (state) => state.boards;
