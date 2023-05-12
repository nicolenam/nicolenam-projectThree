import { Link } from "react-router-dom"; 
import addBtn from "../assets/plus-icon.png";
import minusBtn from "../assets/minusBtn.png";

const BookshelfItem = ({color, bookArray, setBookArray }) =>{

    const handleClick = (e) =>{
        const removeBook = e.target.alt;
        console.log('book array:',bookArray);
        console.log("remove book:", removeBook);
        //filter removeBook from bookArray and setBookArray with updated bookArray
        // const updatedBookArray = bookArray.filter((book)=> book !== removeBook);
        // console.log(updatedBookArray);
        // setBookArray(updatedBookArray);
    }

    //!!!! must move this logic into bookshelf, because that's where i have the actual array. 

    return(
        <div className={`bookshelf-item ${color}-grid`} >
        {
            bookArray && bookArray.length > 0 ?
                bookArray.map((book)=>{
                    console.log("book item:", book)
                    return(
                        book?
                            <>
                                <img className="bookshelf-book" src={book} alt="book url" />
                                <img className="remove-book" onClick={handleClick} alt={book} src={minusBtn} />
                            </>
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
