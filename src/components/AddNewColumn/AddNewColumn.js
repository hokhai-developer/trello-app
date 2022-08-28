import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AddNewColumn.module.scss';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@mui/material';
import { useDispatch } from 'react-redux';
import boardsSlice from '~/redux/slices/boardsSlice';
import uuid from 'react-uuid';

const cx = classNames.bind(styles);
const AddNewColumn = ({ boardId }) => {
  const [showAddNewColumnForm, setShowAddNewColumnForm] = useState(false);
  const [textValue, setTextValue] = useState('');
  const textareaRef = useRef(null);
  const dispatch = useDispatch();

  const handleClear = () => {
    setShowAddNewColumnForm(false);
    setTextValue('');
  };

  const handleAddNewColumn = () => {
    const titleColumn = textValue.trim();
    if (titleColumn.length === 0 || titleColumn.length > 32) {
      if (textareaRef?.current) {
        textareaRef.current.focus();
      }
      return;
    }
    dispatch(
      boardsSlice.actions.addNewColumn({
        title: titleColumn,
        boardId: boardId,
        id: uuid(),
      }),
    );
    setTextValue('');
    setShowAddNewColumnForm(false);
  };
  return (
    <div className={cx('wrapper')}>
      {showAddNewColumnForm ? (
        <div className={cx('add-form')}>
          <div className={cx('out-side-text')}>
            <TextareaAutosize
              ref={textareaRef}
              minRows={1}
              className={cx('text-area')}
              placeholder="Enter column title"
              autoFocus={Boolean(showAddNewColumnForm)}
              value={textValue}
              onChange={(e) => {
                setTextValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleAddNewColumn();
                }
              }}
            />
          </div>

          <div className={cx('actions')}>
            <button
              className={cx('btn-add', 'btn', {
                active:
                  textValue.trim().length > 0 && textValue.trim().length <= 32,
              })}
              onClick={handleAddNewColumn}
            >
              Add column
            </button>
            <button className={cx('btn-clear', 'btn')} onClick={handleClear}>
              <ClearOutlinedIcon fontSize="large" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className={cx('before-add')}
          onClick={() => setShowAddNewColumnForm(true)}
        >
          <div className={cx('icon-add')}>
            <AddOutlinedIcon />
          </div>
          <div className={cx('title-add')}>
            <p className={cx('title')}>Add another Column</p>
          </div>
        </div>
      )}
    </div>
  );
};

AddNewColumn.propTypes = {};

export default AddNewColumn;
