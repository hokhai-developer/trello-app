import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Board.module.scss';
import PropTypes from 'prop-types';
import BoardBar from '~/components/BoardBar';
import BoardContent from '~/components/BoardContent';
import { boardsSelector, currentBoardSelector } from '~/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { useParams } from 'react-router-dom';
import currentIdBoardSlice from '~/redux/slices/currentIdBoardSlice';

const cx = classNames.bind(styles);
const Board = () => {
  const [board, setBoard] = useState({});
  const currentBoard = useSelector(currentBoardSelector);
  const { boardId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      currentIdBoardSlice.actions.set({
        boardId: boardId,
      }),
    );
  }, [boardId]);

  useEffect(() => {
    setBoard(currentBoard);
  }, [currentBoard]);
  // console.log(currentBoard);
  return (
    <div className={cx('wrapper')}>
      {isEmpty(board) ? (
        <div>Khong tim thay board</div>
      ) : (
        <>
          <BoardBar title={board.title} />
          <BoardContent board={board} />
        </>
      )}
    </div>
  );
};

Board.propTypes = {};

export default Board;
