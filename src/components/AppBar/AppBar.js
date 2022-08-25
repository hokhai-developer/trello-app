import React from 'react';
import classNames from 'classnames/bind';
import styles from './AppBar.module.scss';
import PropTypes from 'prop-types';
import Container from '~/components/Container';

const cx = classNames.bind(styles);
const AppBar = (props) => {
  return (
    <div className={cx('wrapper')}>
      <Container>
        <header className={cx('header')}>app bar</header>
      </Container>
    </div>
  );
};

AppBar.propTypes = {};

export default AppBar;
