import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuListActions.module.scss';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import { ColumnContext } from '~/context/ColumnProvider';
import { useDispatch } from 'react-redux';
import boardsSlice from '~/redux/slices/boardsSlice';

const cx = classNames.bind(styles);
const MenuListActions = ({ handleCloseMenu = () => {}, columnId, boardId }) => {
  const { setShowAddNewCard } = useContext(ColumnContext);
  const dispatch = useDispatch();
  const handleAddNewCard = () => {
    setShowAddNewCard(true);
    handleCloseMenu();
  };
  const handleDeleteColumn = () => {
    dispatch(
      boardsSlice.actions.deleteColumns({
        columnId,
        boardId,
      }),
    );
    handleCloseMenu();
  };
  return (
    <div className={cx('wrapper-list')}>
      <div className={cx('list-header')}>
        <h4 className={cx('header-title')}>List actions</h4>
        <button
          className={cx('btn-close-list')}
          onClick={() => handleCloseMenu()}
        >
          <CloseOutlinedIcon />
        </button>
      </div>
      <div className={cx('divider')}></div>
      <div className={cx('list-body')}>
        <div className={cx('list-item')} onClick={handleAddNewCard}>
          <p className={cx('item-title')}>Thêm card mới...</p>
        </div>
        <div className={cx('list-item')} onClick={handleDeleteColumn}>
          <p className={cx('item-title')}>Xóa danh sách này...</p>
        </div>
        <div className={cx('list-item')}>
          <p className={cx('item-title')}>Do something...</p>
        </div>
        <div className={cx('list-item')}>
          <p className={cx('item-title')}>Do something...</p>
        </div>
      </div>
      <div className={cx('divider')}></div>
      <div className={cx('list-footer')}>
        <div className={cx('footer-content')}>
          <p className={cx('title')}> Use it if you want</p>
        </div>
      </div>
    </div>
  );
};

MenuListActions.propTypes = {};

export default MenuListActions;
