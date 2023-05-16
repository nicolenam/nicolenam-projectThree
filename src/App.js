import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Intro from "./components/Intro";
import Bookshelf from "./components/Bookshelf";
import Category from "./components/Category";
import Collection from "./components/Collection";

function App() {
  
  const [bookArray, setBookArray] = useState([]);

  return (
      <div>
      {/* Routing Config */}
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/bookshelf" element={<Bookshelf bookArray={bookArray} setBookArray={setBookArray} />} />
            <Route path="/category" element={<Category />} /> 
            <Route path="/collection/:category" element={<Collection bookArray={bookArray} setBookArray={setBookArray}/>} />
          </Routes>
      </div>
  );
}

export default App;

