import React from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const ColumnBody = (props) => {
  return <main className={cx('wrapper-column-body')}>ColumnBody</main>;
};

ColumnBody.propTypes = {};

export default ColumnBody;
