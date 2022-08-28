import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';
import AppBar from '~/components/AppBar';
import SideBar from '~/components/SideBar';
import Container from '~/components/Container';
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);
const MainLayout = ({ children, className }) => {
  return (
    <div className={cx('wrapper')}>
      <AppBar />
      <div className={cx('body')}>
        <Container className={cx('body-container')}>
          <SideBar />
          <div className={cx('body-content')}>
            <Outlet />
          </div>
        </Container>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
