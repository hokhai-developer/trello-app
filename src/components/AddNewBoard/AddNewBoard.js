import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './AddNewBoard.module.scss';
import PropTypes from 'prop-types';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useDispatch } from 'react-redux';
import { TextareaAutosize } from '@mui/material';
import boardsSlice from '~/redux/slices/boardsSlice';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
const AddNewBoard = (props) => {
  const [textValue, setTextValue] = useState('');
  const [showAddModule, setShowAddModule] = useState(false);
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearTextValue = () => {
    setTextValue('');
    setShowAddModule(false);
  };

  const handleAddNewBoard = () => {
    if (textValue.trim().length === 0) {
      setTextValue('');
      textareaRef.current.focus();
      return;
    }
    if (textValue.trim().length > 16) {
      //show error validate card title
      textareaRef.current.focus();
      textareaRef.current.select();
      return;
    }
    //update new board to redux   const boardId = uuid();
    const boardId = uuid();
    dispatch(
      boardsSlice.actions.addNewBoard({
        boardTitle: textValue.trim(),
        boardId: boardId,
      }),
    );
    navigate(`/board/${boardId}`);
    setTextValue('');
    setShowAddModule(false);
  };

  return (
    <div className={cx('wrapper')}>
      {showAddModule ? (
        <div className={cx('content-add')}>
          <TextareaAutosize
            ref={textareaRef}
            autoFocus={showAddModule}
            minRows={2}
            className={cx('textarea')}
            placeholder="Add new board title"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleAddNewBoard();
              }
            }}
          />
          <div className={cx('add-actions')}>
            <button
              className={cx('btn-add', {
                active: Boolean(textValue),
              })}
              onClick={handleAddNewBoard}
            >
              Add board
            </button>
            <button className={cx('btn-close')} onClick={handleClearTextValue}>
              <ClearOutlinedIcon />
            </button>
          </div>
        </div>
      ) : (
        <div className={cx('before-add')}>
          <button
            className={cx('btn-add')}
            onClick={() => setShowAddModule(true)}
          >
            Thêm một bảng mới
          </button>
        </div>
      )}
    </div>
  );
};

AddNewBoard.propTypes = {};

export default AddNewBoard;
