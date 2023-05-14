import { Link } from "react-router-dom"; 
import addBtn from "../assets/plus-icon.png";
import minusBtn from "../assets/minusBtn.png";

const BookshelfItem = ({color, bookArray, index, handleRemoveBook}) =>{
    
    return(
        <div className={`bookshelf-item ${color}-grid`} >
        {
            bookArray.map((url)=>{
                return(
                    url?
                        <>
                            <img className="bookshelf-book" src={url} alt="book url" />
                            <img className="remove-book" alt={url} src={minusBtn} onClick={()=>{handleRemoveBook(index)}}/>
                        </>
                    :
                    <Link to="/category">
                        <img className="bookshelf-img" src={addBtn} alt="plus button icon" />
                    </Link>    
                )
            })
   
        }
        </div>
    )
}

export default BookshelfItem;
