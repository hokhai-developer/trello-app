import React from 'react';
import className from 'classnames/bind';
import styles from './BoardContent.module.scss';
import PropTypes from 'prop-types';
import Column from '../Column';
import AddNewColumn from '../AddNewColumn';

const cx = className.bind(styles);
const BoardContent = (props) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('list-column')}>
        <Column />
      </div>
      <AddNewColumn />
    </div>
  );
};

BoardContent.propTypes = {};

export default BoardContent;
