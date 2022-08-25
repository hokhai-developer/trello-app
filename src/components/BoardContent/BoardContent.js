import React from 'react';
import className from 'classnames/bind';
import styles from './BoardContent.module.scss';
import PropTypes from 'prop-types';
import Column from '../Column';

const cx = className.bind(styles);
const BoardContent = (props) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('list-column')}>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
      <div>Add new column</div>
    </div>
  );
};

BoardContent.propTypes = {};

export default BoardContent;
