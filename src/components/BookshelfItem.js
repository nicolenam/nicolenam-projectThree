import { Link } from "react-router-dom"; 
import addBtn from "../assets/plus-icon.png";

const BookshelfItem = ({color, bookArray}) =>{

    return(
        <div className={`bookshelf-item ${color}-grid`} >
        {
            bookArray && bookArray.length > 0 ?
                bookArray.map((book)=>{
                    console.log("book item:", book)
                    return(
                        book?
                            <img className="bookshelf-book" src={book} alt="book url" />
                        :
                        <Link to="/category">
                            <img className="bookshelf-img" src={addBtn} alt="plus button icon" />
                        </Link>    
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
