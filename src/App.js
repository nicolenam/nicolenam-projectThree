import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Intro from './components/Intro';
import Bookshelf from './components/Bookshelf';
import Category from './components/Category';
// import Book from './components/Book';
// import Collection from './components/Collection';

function App() {

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/category" element={<Category />} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;

