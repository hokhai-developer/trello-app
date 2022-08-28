import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import styles from './BoardContent.module.scss';
import PropTypes from 'prop-types';
import Column from '../Column';
import AddNewColumn from '../AddNewColumn';

const cx = className.bind(styles);
const BoardContent = ({ board }) => {
  const { columns, id } = board;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('list-column')}>
        {columns?.length > 0 &&
          columns.map((column) => {
            if (column.deleted) return;
            return <Column key={column.id} column={column} />;
          })}
      </div>
      <AddNewColumn boardId={id} />
    </div>
  );
};

BoardContent.propTypes = {};

export default BoardContent;
