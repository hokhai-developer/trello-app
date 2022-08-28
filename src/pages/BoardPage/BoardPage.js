import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoardPage.module.scss';
import PropTypes from 'prop-types';
import Board from '~/components/Board';
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);
const BoardPage = (props) => {
  return (
    <div
      className={cx('wrapper', {
        'close-side-bar': false, // add 'close-side-bar' when toggle sidebar
      })}
    >
      <Outlet />
    </div>
  );
};

BoardPage.propTypes = {};

export default BoardPage;
