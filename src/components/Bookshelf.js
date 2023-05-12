import { useEffect } from "react";
import BookshelfItem from "./BookshelfItem";
import BookshelfIcon from "../assets/bookshelf-icon.png";
import Navigation from "./Navigation";

const Bookshelf = ({bookArray, setBookArray}) =>{

    console.log('book array:', bookArray);

    useEffect(()=>{

        document.body.classList.add('bookshelf-background');
        return() =>{
            document.body.classList.remove('bookshelf-background');
        }

    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            <Navigation />
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
                                    {/* created single array for each one that is passed */}
                                    <BookshelfItem color="blue" bookArray={[bookArray[0]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="blue" bookArray={[bookArray[1]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="blue" bookArray={[bookArray[2]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="blue" bookArray={[bookArray[3]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="orange" bookArray={[bookArray[4]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="white" bookArray={[bookArray[5]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="white" bookArray={[bookArray[6]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="white" bookArray={[bookArray[7]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="white" bookArray={[bookArray[8]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="orange" bookArray={[bookArray[9]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="white" bookArray={[bookArray[10]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="white" bookArray={[bookArray[11]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="white" bookArray={[bookArray[12]]} setBookArray={setBookArray}/>
                                    <BookshelfItem color="white" bookArray={[bookArray[13]]} setBookArray={setBookArray}/>
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
        </>
    )
}

export default Bookshelf;