import { Link } from "react-router-dom"; 
import addBtn from "../assets/plus-icon.png";
import minusBtn from "../assets/minusBtn.png";

const BookshelfItem = ({color, bookUrl, index, handleRemoveBook}) =>{
    
    return(
        <div className={`bookshelf-item ${color}-grid`} >
        {
                    bookUrl?
                        <>
                            <img className="bookshelf-book" src={bookUrl} alt="book url" />
                            <img className="remove-book" alt={bookUrl} src={minusBtn} onClick={()=>{handleRemoveBook(index)}}/>
                        </>
                    :
                    <Link to="/category">
                        <img className="bookshelf-img" src={addBtn} alt="plus button icon" />
                    </Link>    
   
        }
        </div>
    )
}

export default BookshelfItem;
