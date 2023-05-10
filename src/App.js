import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Intro from './components/Intro';
import Bookshelf from './components/Bookshelf';
import Category from './components/Category';
import Collection from './components/Collection';
import Book from './components/Book';

function App() {
  
  const [bookArray, setBookArray] = useState([]);

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/bookshelf" element={<Bookshelf bookArray={bookArray} />} />
            <Route path="/category" element={<Category />} /> 
            <Route path="/collection" element={<Collection bookArray={bookArray} setBookArray={setBookArray}/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

