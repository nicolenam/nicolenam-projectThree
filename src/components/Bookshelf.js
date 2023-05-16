import { useEffect } from "react";
import BookshelfItem from "./BookshelfItem";
import BookshelfIcon from "../assets/bookshelf-icon.png";

const Bookshelf = ({bookArray, setBookArray}) =>{

    const handleRemoveBook = (index) =>{
      const updatedArray = bookArray.filter((book, i) => i !== index);
      setBookArray(updatedArray);
    }

    useEffect(()=>{

        document.body.classList.add('bookshelf-background');
        return() =>{
            document.body.classList.remove('bookshelf-background');
        }

    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    const bookShelfItems = [];

    for(let i = 0; i < 14 ; i++){
      
      let color;

      if(i < 4){
        color = "blue";      
      }else if (i === 4 || i === 9){
        color = "orange";
      }else{
        color = "white";
      }

      bookShelfItems.push(
      <BookshelfItem key={i} color={color} bookUrl={bookArray[i]} index={i} handleRemoveBook={handleRemoveBook} />
      )
    }

    return(
        <>
            <section className="bookshelf wrapper">
                <div>
                    <h2>Bookiverse Bookshelf</h2>
                    <div className="bookshelf-grid">
                        <div className="bookshelf-item orange-grid">
                            <img className="bookshelf-icon" src={BookshelfIcon} alt="pink circle smiley icon" />
                        </div>
                        {
                          bookShelfItems
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bookshelf;