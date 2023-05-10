import { useEffect } from "react";
import BookshelfItem from "./BookshelfItem";
import BookshelfIcon from "../assets/bookshelf-icon.png";

const Bookshelf = ({bookArray}) =>{

    console.log('book array:', bookArray);

    useEffect(()=>{

        document.body.classList.add('bookshelf-background');
        return() =>{
            document.body.classList.remove('bookshelf-background');
        }

    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className="bookshelf wrapper">
            <div>
                <h2>Bookiverse Bookshelf</h2>
                <div className="bookshelf-grid">
                    <div className="bookshelf-item orange-grid">
                        <img className="bookshelf-icon" src={BookshelfIcon} alt="pink circle smiley icon" />
                    </div>
                    <BookshelfItem color="blue" bookArray={bookArray}/>
                    <BookshelfItem color="blue" bookArray={bookArray}/>
                    <BookshelfItem color="blue" bookArray={bookArray}/>
                    <BookshelfItem color="blue" bookArray={bookArray}/>
                    <BookshelfItem color="orange" bookArray={bookArray}/>
                    <BookshelfItem color="white" bookArray={bookArray}/>
                    <BookshelfItem color="white" bookArray={bookArray}/>
                    <BookshelfItem color="white" bookArray={bookArray}/>
                    <BookshelfItem color="white" bookArray={bookArray}/>
                    <BookshelfItem color="orange" bookArray={bookArray}/>
                    <BookshelfItem color="white" bookArray={bookArray}/>
                    <BookshelfItem color="white" bookArray={bookArray}/>
                    <BookshelfItem color="white" bookArray={bookArray}/>
                    <BookshelfItem color="white" bookArray={bookArray}/>
                </div>
            </div>
        </div>
    )
}

export default Bookshelf;