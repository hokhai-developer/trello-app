import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Board.module.scss';
import PropTypes from 'prop-types';
import BoardBar from '~/components/BoardBar';
import BoardContent from '~/components/BoardContent';
import { boardsSelector } from '~/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
const Board = () => {
  const boards = useSelector(boardsSelector);
  const { boardId } = useParams();
  const board = useMemo(() => {
    const currentBoard = boards.find((item) => {
      return item.id.toString() === boardId.toString();
    });
    return isEmpty(currentBoard) ? {} : currentBoard;
  }, [boards, boardId]);
  return (
    <div className={cx('wrapper')}>
      {isEmpty(board) ? (
        <div>Khong tim thay board</div>
      ) : (
        <>
          <BoardBar />
          <BoardContent board={board} />
        </>
      )}
    </div>
  );
};

Board.propTypes = {};

export default Board;
