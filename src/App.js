import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import BookList from './component/BookList';
import Categories from './component/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
