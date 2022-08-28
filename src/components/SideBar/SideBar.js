import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { boardsSelector } from '~/redux/selectors';
import { NavLink } from 'react-router-dom';
import AddNewBoard from '../AddNewBoard';

const cx = classNames.bind(styles);
const SideBar = (props) => {
  const boards = useSelector(boardsSelector);
  const listTitleBoard = useMemo(() => {
    const newList = boards.map((board) => {
      return {
        title: board.title,
        id: board.id,
      };
    });
    return newList;
  }, [boards]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('sticky')}>
        <div className={cx('sticky-content')}>
          <h3 className={cx('sticky-content-title')}>Your Board:</h3>
          {listTitleBoard?.length > 0 &&
            listTitleBoard.map((board) => {
              return (
                <NavLink
                  to={`/board/${board.id}`}
                  key={board.id}
                  className={(isActive) => {
                    return cx({
                      active: isActive.isActive,
                    });
                  }}
                >
                  <div className={cx('side-bar-item')}>
                    <p className={cx('item-title')}>{board.title}</p>
                  </div>
                </NavLink>
              );
            })}
          <AddNewBoard />
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
