import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoardBar.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const BoardBar = ({ title = 'title' }) => {
  return <div className={cx('wrapper')}>{JSON.stringify(title)}</div>;
};

BoardBar.propTypes = {};

export default BoardBar;
