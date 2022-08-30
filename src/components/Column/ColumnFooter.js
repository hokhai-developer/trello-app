import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@mui/material';
import { useDispatch } from 'react-redux';
import { boards } from '~/utilities/initialData';
import boardsSlice from '~/redux/slices/boardsSlice';
import uuid from 'react-uuid';
import { ColumnContext } from '~/context/ColumnProvider';
import { current } from '@reduxjs/toolkit';
import cardsSlice from '~/redux/slices/cardsSlice';
import columnsSlice from '~/redux/slices/columnsSlice';

const cx = classNames.bind(styles);
const ColumnFooter = ({ boardId, columnId }) => {
  const [textValue, setTextValue] = useState('');
  const textareaRef = useRef(null);
  const dispatch = useDispatch();

  const { showAddNewCard, setShowAddNewCard } = useContext(ColumnContext);

  const handleClearTextValue = () => {
    setTextValue('');
    setShowAddNewCard(false);
  };

  const handleAddNewCard = () => {
    if (textValue.trim().length === 0) {
      setTextValue('');
      setShowAddNewCard(false);
    }
    if (textValue.trim().length > 64) {
      //show error validate card title
      textareaRef.current.focus();
      textareaRef.current.select();
      return;
    }

    //update new card to redux
    const cardId = uuid();
    dispatch(
      cardsSlice.actions.addNewCard({
        cardTitle: textValue.trim(),
        boardId,
        columnId,
        cardId,
      }),
    );
    dispatch(
      columnsSlice.actions.updateCardOrder({
        boardId,
        columnId,
        cardId,
      }),
    );
    setTextValue('');
    setShowAddNewCard(false);
  };
  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef?.current.focus();
    }
  }, [showAddNewCard]);
  return (
    <footer className={cx('wrapper-column-footer')}>
      <div className={cx('content')}>
        {showAddNewCard ? (
          <div className={cx('content-add')}>
            <TextareaAutosize
              ref={textareaRef}
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
                onClick={handleAddNewCard}
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
        ) : (
          <div
            className={cx('content-before-add')}
            onClick={() => setShowAddNewCard(true)}
          >
            <div className={cx('add-icon')}>
              <AddOutlinedIcon />
            </div>
            <p className={cx('title')}>Add new card</p>
          </div>
        )}
      </div>
    </footer>
  );
};

ColumnFooter.propTypes = {};

export default ColumnFooter;
