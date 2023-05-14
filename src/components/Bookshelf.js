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
        //clean up function to remove class when the component is unmounted.
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
      <BookshelfItem key={i} color={color} bookArray={[bookArray[i]]} index={i} handleRemoveBook={handleRemoveBook} />
      )
    }

    console.log("bookshelfItems",bookShelfItems);

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
                          bookShelfItems
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookshelf;