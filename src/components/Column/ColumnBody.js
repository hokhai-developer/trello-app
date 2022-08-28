import React from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const ColumnBody = ({ cards }) => {
  return (
    <main className={cx('wrapper-column-body')}>
      <div className={cx('card-list')}>
        {cards?.length > 0 &&
          cards.map((card) => {
            return (
              <div className={cx('card-item')} key={card.id}>
                <p className={cx('item-title')}>{card.title}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
};

ColumnBody.propTypes = {};

export default ColumnBody;
