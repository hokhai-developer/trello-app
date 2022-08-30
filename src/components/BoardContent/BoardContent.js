import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import styles from './BoardContent.module.scss';
import PropTypes from 'prop-types';
import Column from '../Column';
import AddNewColumn from '../AddNewColumn';
import { Container, Draggable } from 'react-smooth-dnd';
import { useDispatch } from 'react-redux';
import boardsSlice from '~/redux/slices/boardsSlice';

const cx = className.bind(styles);
const BoardContent = ({ board }) => {
  const { columns, id } = board;
  const dispatch = useDispatch();
  const onColumnDrop = (dropResult) => {
    const { addedIndex, payload, removedIndex } = dropResult;
    if (addedIndex === removedIndex) return;
    if (removedIndex === null && addedIndex === null) return;
    dispatch(
      boardsSlice.actions.applyDragColum({
        addedIndex,
        removedIndex,
        boardId: board.id,
        columnId: payload.id,
      }),
    );
  };
  return (
    <div className={cx('wrapper')}>
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => {
          return columns[index];
        }}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: cx('cards-drop-preview'),
        }}
      >
        {columns?.length > 0 &&
          columns.map((column) => {
            if (column.deleted) return;
            return (
              <Draggable key={column.id}>
                <Column key={column.id} column={column} />
              </Draggable>
            );
          })}
      </Container>
      <AddNewColumn boardId={id} />
    </div>
  );
};

BoardContent.propTypes = {};

export default BoardContent;
