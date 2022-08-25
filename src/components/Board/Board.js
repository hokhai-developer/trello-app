import React from 'react';
import classNames from 'classnames/bind';
import styles from './Board.module.scss';
import PropTypes from 'prop-types';
import BoardBar from '~/components/BoardBar';
import BoardContent from '~/components/BoardContent';

const cx = classNames.bind(styles);
const Board = () => {
  return (
    <div className={cx('wrapper')}>
      <BoardBar />
      <BoardContent />
    </div>
  );
};

Board.propTypes = {};

export default Board;
