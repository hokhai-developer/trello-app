import React from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const ColumnFooter = (props) => {
  return <footer className={cx('wrapper-column-footer')}>ColumnFooter</footer>;
};

ColumnFooter.propTypes = {};

export default ColumnFooter;
