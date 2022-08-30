import React from 'react';
import classNames from 'classnames/bind';
import styles from './Column.module.scss';
import PropTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';
import { useDispatch } from 'react-redux';
import columnsSlice from '~/redux/slices/columnsSlice';

const cx = classNames.bind(styles);
const ColumnBody = ({ cards, column }) => {
  const dispatch = useDispatch();
  const onCardDrop = (columId, cardDropResult) => {
    const { addedIndex, removedIndex, payload } = cardDropResult;
    if (
      cardDropResult.addedIndex === null &&
      cardDropResult.removedIndex === null
    )
      return;
    dispatch(
      columnsSlice.actions.applyDragCardOrder({
        columId,
        addedIndex,
        removedIndex,
        cardId: payload.id,
      }),
    );
  };
  return (
    <main className={cx('wrapper-column-body')}>
      <div className={cx('card-list')}>
        <Container
          // onDragStart={(e) => console.log('drag started', e)}
          // onDragEnd={(e) => console.log('drag end', e)}
          // onDragEnter={() => {
          //   console.log('drag enter:', column.id);
          // }}
          // onDragLeave={() => {
          //   console.log('drag leave:', column.id);
          // }}
          // onDropReady={(p) => console.log('Drop ready: ', p)}
          groupName="col"
          onDrop={(cardDropResult) => onCardDrop(column.id, cardDropResult)}
          getChildPayload={(index) => cards[index]}
          dragClass={cx('card-ghost')}
          dropClass={cx('card-ghost-drop')}
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: cx('drop-preview'),
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card) => {
            return (
              <Draggable key={card.id}>
                <div className={cx('card-item')}>
                  <p className={cx('item-title')}>{card.title}</p>
                </div>
              </Draggable>
            );
          })}
        </Container>
      </div>
    </main>
  );
};

ColumnBody.propTypes = {};

export default ColumnBody;
