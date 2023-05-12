import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Intro from "./components/Intro";
import Bookshelf from "./components/Bookshelf";
import Category from "./components/Category";
import Collection from "./components/Collection";
import PageNotFound from "./components/PageNotFound"

function App() {
  
  const [bookArray, setBookArray] = useState([]);

  return (
      <div>
      {/* Routing Config */}
          <Routes>
          {/* might not need a path for intro */}
            <Route path="/" element={<Intro />} />
            <Route path="/bookshelf" element={<Bookshelf bookArray={bookArray} setBookArray={setBookArray} />} />
            <Route path="/category" element={<Category />} /> 
            <Route path="/collection" element={<Collection bookArray={bookArray} setBookArray={setBookArray}/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </div>
  );
}

export default App;

