import { Link } from "react-router-dom"; 
import addBtn from "../assets/plus-icon.png";

const BookshelfItem = ({color, bookArray}) =>{

    console.log('BookshelfItem: ', bookArray)

    return(
        <div className={`bookshelf-item ${color}-grid`} >
            <Link to="/category">
                <img className="bookshelf-img" src={addBtn} alt="plus button icon" />
            </Link>
        </div>
    )
}

export default BookshelfItem;
