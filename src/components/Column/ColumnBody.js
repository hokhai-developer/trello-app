import React from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const ColumnBody = (props) => {
  return (
    <main className={cx('wrapper-column-body')}>
      <div className={cx('card-list')}>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 1</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 2</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
        <div className={cx('card-item')}>
          <p className={cx('item-title')}>card item 3</p>
        </div>
      </div>
    </main>
  );
};

ColumnBody.propTypes = {};

export default ColumnBody;
