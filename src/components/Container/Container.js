import React from 'react';
import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Container = ({ children, className }) => {
  return <div className={cx('wrapper', className)}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
