import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@mui/material';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import MenuListActions from '~/components/MenuListActions';
import { useDispatch } from 'react-redux';
import boardsSlice from '~/redux/slices/boardsSlice';
import columnsSlice from '~/redux/slices/columnsSlice';

const cx = classNames.bind(styles);
const ColumnHeader = ({ title: headerTitle, columnId, boardId }) => {
  const [title, setTitle] = useState(headerTitle);
  const [showEditTitle, setShowEditTitle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(headerTitle);
  const clearBtnRef = useRef(null);
  const cancelRef = useRef(null);
  const textareaRef = useRef(null);
  const dispatch = useDispatch();

  const handleBlur = (e) => {
    if (
      e.relatedTarget &&
      clearBtnRef.current &&
      e.relatedTarget.contains(clearBtnRef.current)
    ) {
      handleClearValue();
      return;
    }
    if (
      e.relatedTarget &&
      clearBtnRef.current &&
      e.relatedTarget.contains(cancelRef.current)
    ) {
      handleCancel();
      return;
    }

    if (e.target.value.trim().length === 0) {
      setValue(title);
      setShowEditTitle(false);
    } else if (e.target.value.trim() !== title) {
      //update title to redux
      if (
        e.target.value.trim().length === 0 ||
        e.target.value.trim().length > 32
      ) {
        //column title validate false => show case
        textareaRef?.current.focus();
        return;
      }
      dispatch(
        columnsSlice.actions.updateTitleColumn({
          titleColumn: e.target.value.trim(),
          columnId,
          boardId,
        }),
      );
      setTitle(e.target.value);
      setValue(e.target.value);
      setShowEditTitle(false);
    } else {
      setShowEditTitle(false);
    }
  };

  const handleClearValue = () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.focus();
      setValue('');
    }
  };

  const handleCancel = () => {
    setShowEditTitle(false);
    setValue(title);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {showEditTitle ? (
        <div className={cx('edit-title')}>
          <TextareaAutosize
            minRows={2}
            ref={textareaRef}
            autoFocus={showEditTitle}
            className={cx('textarea')}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onFocus={(e) => e.target.select()}
            onBlur={(e) => handleBlur(e)}
          />
          <div className={cx('actions')}>
            <Tooltip
              title="Xóa giá trị hiện tại"
              placement="top"
              TransitionComponent={Zoom}
              arrow
              // followCursor
            >
              <button
                className={cx('btn')}
                onClick={handleClearValue}
                ref={clearBtnRef}
              >
                Xóa
              </button>
            </Tooltip>
            <Tooltip
              title="Hủy chỉnh sửa"
              placement="bottom"
              TransitionComponent={Zoom}
              arrow
              // followCursor
            >
              <button
                className={cx('btn')}
                onClick={handleCancel}
                ref={cancelRef}
              >
                Hủy
              </button>
            </Tooltip>
          </div>
        </div>
      ) : (
        <header className={cx('wrapper-column-header')}>
          <h2
            className={cx('column-title')}
            onMouseDown={(e) => {}}
            onClick={(e) => {
              setShowEditTitle(true);
            }}
          >
            {title}
          </h2>
          <Tooltip
            title="Menu List"
            placement="bottom"
            TransitionComponent={Zoom}
            arrow
            // followCursor
          >
            <button
              className={cx('btn-actions')}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <MoreHorizOutlinedIcon />
            </button>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => {
              handleCloseMenu();
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              style: {
                minHeight: '160px',
                minWidth: '304px',
              },
            }}
          >
            <MenuListActions
              handleCloseMenu={handleCloseMenu}
              columnId={columnId}
              boardId={boardId}
            />
          </Menu>
        </header>
      )}
    </>
  );
};

ColumnHeader.propTypes = {};

export default ColumnHeader;
