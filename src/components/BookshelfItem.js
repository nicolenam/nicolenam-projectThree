import { Link } from "react-router-dom"; 
import addBtn from "../assets/plus-icon.png";

const BookshelfItem = ({color, bookArray}) =>{

    console.log('BookshelfItem: ', bookArray)

    return(
        <div className={`bookshelf-item ${color}-grid`} >
        {
            bookArray && bookArray.length > 0 ?
                bookArray.map((book)=>{
                    return(
                    <img className="bookshelf-img" src={book} alt="book image url" />
                    )
                })
                :
                <Link to="/category">
                    <img className="bookshelf-img" src={addBtn} alt="plus button icon" />
                </Link>
        }
        </div>
    )
}

export default BookshelfItem;
