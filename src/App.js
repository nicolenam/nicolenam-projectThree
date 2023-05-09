import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Intro from './components/Intro';
import Bookshelf from './components/Bookshelf';
// import Book from './components/Book';
// import Collection from './components/Collection';

function App() {

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

