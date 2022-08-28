import MainLayout from '~/layouts/MainLayout';
import BoardPage from '~/pages/BoardPage/BoardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './components/Board';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/board" element={<BoardPage />}>
            <Route path=":boardId" element={<Board />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
