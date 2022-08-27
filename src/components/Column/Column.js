import React from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import PropTypes from 'prop-types';
import ColumnHeader from './ColumnHeader';
import ColumnBody from './ColumnBody';
import ColumnFooter from './ColumnFooter';

const cx = classNames.bind(styles);
const Column = (props) => {
  return (
    <div className={cx('wrapper-column')}>
      <ColumnHeader />
      <ColumnBody />
      <ColumnFooter />
    </div>
  );
};

Column.propTypes = {};

export default Column;
