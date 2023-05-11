import heartIcon from "../assets/heart-icon.png"
import { useState, useEffect } from "react";
import DisplayError from "./DisplayError";
 
const Book = ({title, author, imgUrl, description, handleClick, bookInArray, overMaxNum}) =>{

    const [errMessage, setErrMessage] = useState('');

    useEffect(()=>{
        console.log(overMaxNum, "book comp")
        setErrMessage("Oops you have added too much!")
    },[overMaxNum]);

    return overMaxNum ? (
        //maybe consider using a different component?...
        <DisplayError errMessage={errMessage}/>
    )
    : 
    (
        <div className={`book-item ${bookInArray? "disable-click" : ""}`}>
            <img className="heart-icon" src={heartIcon} alt="heart icon" />
            <div className="img-container">
                <img  src={imgUrl} alt={title} onClick={()=>{handleClick(imgUrl)}}/>
                <div className="heart-icon"></div>
            </div>
            <div>
                <h3>{title}</h3>
                <p>By {author}</p>
                <p>{`${description.slice(0,200)}...`}</p>
            </div>
        </div>
    )
}

export default Book;

