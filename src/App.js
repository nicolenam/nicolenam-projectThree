import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Intro from './components/Intro';
import Bookshelf from './components/Bookshelf';
import Category from './components/Category';
import Collection from './components/Collection';
// import Book from './components/Book';

function App() {

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/category" element={<Category />} /> 
            <Route path="/collection" element={<Collection />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

