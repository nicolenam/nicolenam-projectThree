// import { useEffect } from "react";
import { Link } from "react-router-dom"; 
import addBtn from "../assets/plus-icon.png";

const BookshelfItem = ({color}) =>{

    return(
        <div className={`bookshelf-item ${color}-grid`} >
            <Link to="/category">
                <img className="bookshelf-img" src={addBtn} alt="plus button icon" />
            </Link>
        </div>
    )
}

export default BookshelfItem;
