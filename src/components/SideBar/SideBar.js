import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const SideBar = (props) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('sticky')}>SideBar</div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
