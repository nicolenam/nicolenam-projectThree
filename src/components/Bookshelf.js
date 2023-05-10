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
                    {
                        bookArray && bookArray.length > 0 ?
                            <>
                                <BookshelfItem color="blue" bookArray={[bookArray[0]]}/>
                                <BookshelfItem color="blue" bookArray={[bookArray[1]]}/>
                                <BookshelfItem color="blue" bookArray={[bookArray[2]]}/>
                                <BookshelfItem color="blue" bookArray={[bookArray[3]]}/>
                                <BookshelfItem color="orange" bookArray={[bookArray[4]]}/>
                                <BookshelfItem color="white" bookArray={[bookArray[5]]}/>
                                <BookshelfItem color="white" bookArray={[bookArray[6]]}/>
                                <BookshelfItem color="white" bookArray={[bookArray[7]]}/>
                                <BookshelfItem color="white" bookArray={[bookArray[8]]}/>
                                <BookshelfItem color="orange" bookArray={[bookArray[9]]}/>
                                <BookshelfItem color="white" bookArray={[bookArray[10]]}/>
                                <BookshelfItem color="white" bookArray={[bookArray[11]]}/>
                                <BookshelfItem color="white" bookArray={[bookArray[12]]}/>
                                <BookshelfItem color="white" bookArray={[bookArray[13]]}/>
                            </>
                            :
                            <>
                                <BookshelfItem color="blue"/>
                                <BookshelfItem color="blue"/>
                                <BookshelfItem color="blue"/>
                                <BookshelfItem color="blue"/>
                                <BookshelfItem color="orange"/>
                                <BookshelfItem color="white"/>
                                <BookshelfItem color="white" />
                                <BookshelfItem color="white"/>
                                <BookshelfItem color="white"/>
                                <BookshelfItem color="orange"/>
                                <BookshelfItem color="white"/>
                                <BookshelfItem color="white"/>
                                <BookshelfItem color="white"/>
                                <BookshelfItem color="white"/>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Bookshelf;