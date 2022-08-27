import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@mui/material';

const cx = classNames.bind(styles);
const ColumnFooter = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const [textValue, setTextValue] = useState('');
  const handleClearTextValue = () => {
    setTextValue('');
    setShowAdd(false);
  };
  return (
    <footer className={cx('wrapper-column-footer')}>
      <div className={cx('content')}>
        {!showAdd ? (
          <div
            className={cx('content-before-add')}
            onClick={() => setShowAdd(true)}
          >
            <div className={cx('add-icon')}>
              <AddOutlinedIcon />
            </div>
            <p className={cx('title')}>Add new card</p>
          </div>
        ) : (
          <div className={cx('content-add')}>
            <TextareaAutosize
              minRows={3}
              className={cx('textarea')}
              placeholder="Add new card title"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
            <div className={cx('add-actions')}>
              <button
                className={cx('btn-add', {
                  active: Boolean(textValue),
                })}
              >
                Add card
              </button>
              <button
                className={cx('btn-close')}
                onClick={handleClearTextValue}
              >
                <ClearOutlinedIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

ColumnFooter.propTypes = {};

export default ColumnFooter;
