import { useEffect } from "react";
import BookshelfItem from "./BookshelfItem";
import BookshelfIcon from "../assets/bookshelf-icon.png";
import Navigation from "./Navigation";

const Bookshelf = ({bookArray, setBookArray}) =>{

    console.log('book array:', bookArray);
    const handleRemoveBook = (index) =>{
        console.log("clicked", index);
        const updatedArray = bookArray.filter((book, i) => i !== index);
        console.log("updated array:", updatedArray);
        setBookArray(updatedArray);
    }

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
                                    <BookshelfItem key="1" color="blue" bookArray={[bookArray[0]]} index={0} handleRemoveBook={handleRemoveBook} />
                                    <BookshelfItem key="2" color="blue" bookArray={[bookArray[1]]} />
                                    <BookshelfItem key="3" color="blue" bookArray={[bookArray[2]]}/>
                                    <BookshelfItem key="4" color="blue" bookArray={[bookArray[3]]}/>
                                    <BookshelfItem key="5" color="orange" bookArray={[bookArray[4]]}/>
                                    <BookshelfItem key="6" color="white" bookArray={[bookArray[5]]}/>
                                    <BookshelfItem key="7" color="white" bookArray={[bookArray[6]]}/>
                                    <BookshelfItem key="8" color="white" bookArray={[bookArray[7]]}/>
                                    <BookshelfItem key="9" color="white" bookArray={[bookArray[8]]}/>
                                    <BookshelfItem key="10" color="orange" bookArray={[bookArray[9]]}/>
                                    <BookshelfItem key="11" color="white" bookArray={[bookArray[10]]}/>
                                    <BookshelfItem key="12" color="white" bookArray={[bookArray[11]]}/>
                                    <BookshelfItem key="13" color="white" bookArray={[bookArray[12]]}/>
                                    <BookshelfItem key="14" color="white" bookArray={[bookArray[13]]}/>
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