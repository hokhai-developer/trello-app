export const boards = [
  {
    id: 'board-1',
    title: 'handsome board 1',
    columnOrder: ['column-1', 'column-2'],
    columns: [
      {
        id: 'column-1',
        boardId: 'board-1',
        title: 'todo something column 1',
        cardOrder: ['card-1', 'card-2', 'card-3'],
        cards: [
          {
            id: 'card-1',
            columnId: 'column-1',
            boardId: 'board-1',
            title: 'học lap trình cơ bản card 1',
            cover: null,
          },
          {
            id: 'card-2',
            columnId: 'column-1',
            boardId: 'board-1',
            title: 'học lap trình nâng cao card 2',
            cover: null,
          },
          {
            id: 'card-3',
            columnId: 'column-1',
            boardId: 'board-1',
            title: 'chơi game easy card 3',
            cover: null,
          },
        ],
      },
      {
        id: 'column-2',
        boardId: 'board-1',
        title: 'never give up colum 2',
        cardOrder: ['card-4', 'card-5', 'card-6'],
        cards: [
          {
            id: 'card-4',
            columnId: 'column-2',
            boardId: 'board-1',
            title: 'chơi game try hard card 4',
            cover: null,
          },
          {
            id: 'card-5',
            columnId: 'column-2',
            boardId: 'board-1',
            title: 'về quê ăn tết card 5',
            cover: null,
          },
          {
            id: 'card-6',
            columnId: 'column-2',
            boardId: 'board-1',
            title: 'lại phải đi chơi card 6',
            cover: null,
          },
        ],
      },
    ],
  },
  {
    id: 'board-2',
    title: 'learn English board 2',
    columnOrder: ['column-3'],
    columns: [
      {
        id: 'column-3',
        boardId: 'board-2',
        title: 'try hard column 3',
        cardOrder: ['card-7'],
        cards: [
          {
            id: 'card-7',
            columnId: 'column-3',
            boardId: 'board-2',
            title: 'call back myself card 7',
            cover: null,
          },
        ],
      },
    ],
  },
  {
    id: 'board-3',
    title: 'No column 3',
    columnOrder: [],
    columns: [],
  },
];
