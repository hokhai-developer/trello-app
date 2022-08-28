import React from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import PropTypes from 'prop-types';
import ColumnHeader from './ColumnHeader';
import ColumnBody from './ColumnBody';
import ColumnFooter from './ColumnFooter';
import ColumnProvider from '~/context/ColumnProvider';

const cx = classNames.bind(styles);
const Column = ({ column }) => {
  const { cards, title, id, boardId } = column;
  return (
    <ColumnProvider>
      <div className={cx('wrapper-column')}>
        <ColumnHeader title={title} columnId={id} boardId={boardId} />
        {cards?.length > 0 && <ColumnBody cards={cards} />}
        <ColumnFooter columnId={id} boardId={boardId} />
      </div>
    </ColumnProvider>
  );
};

Column.propTypes = {};

export default Column;
