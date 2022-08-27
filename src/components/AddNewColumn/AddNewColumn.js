import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AddNewColumn.module.scss';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@mui/material';

const cx = classNames.bind(styles);
const AddNewColumn = (props) => {
  const [showAddNewColumnForm, setShowAddNewColumnForm] = useState(false);
  const [textValue, setTextValue] = useState('');

  const handleClear = () => {
    setShowAddNewColumnForm(false);
    setTextValue('');
  };
  return (
    <div className={cx('wrapper')}>
      {showAddNewColumnForm ? (
        <div className={cx('add-form')}>
          <div className={cx('out-side-text')}>
            <TextareaAutosize
              minRows={1}
              className={cx('text-area')}
              placeholder="Enter column title"
              autoFocus={Boolean(showAddNewColumnForm)}
              value={textValue}
              onChange={(e) => {
                setTextValue(e.target.value);
              }}
            />
          </div>

          <div className={cx('actions')}>
            <button
              className={cx('btn-add', 'btn', {
                active: true,
              })}
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
