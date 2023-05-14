import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import loader from '../assets/call-to-action.png';
import Book from "./Book";
import DisplayError from "./DisplayError";
import LimitMessage from "./LimitMessage";
// import PageNotFound from "./PageNotFound";
import Navigation from "./Navigation";

 
const Collection = ({bookArray, setBookArray}) => {

    // console.log("set book array ", bookArray);

    // This gets the search path ie) 'collection?category=Fairy Tales'
    const path = useLocation();
    const category = new URLSearchParams(path.search);
    const userChoice = category.get('category');

    // console.log(userChoice, 'omg!!!!! it is here 🌈');

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dataLength, setDataLength] = useState('');
    const [isError, setIsError] = useState(false);
    const [overMaxNum, setOverMaxNum] = useState(false);

    // const [firstNum, setFirstNum] =  useState(''); 

    useEffect(()=>{

        // console.log(dataLength, 'new data length');

            // const min = 0;
            // const max = dataLength -12;
            // setFirstNum(Math.floor(Math.random() * (max - min + 1)) + min); 

    },[dataLength]);

    const url = new URL("http://openlibrary.org/search.json");

    url.search = new URLSearchParams({
        subject: "picture books",
        q: userChoice,
        audience: "juvenile"
    });

    useEffect(() => {

        const getBookData = async () => {

            setIsError(false); 

            try {
                const response = await fetch(url);
                const collectionData = await response.json();

                setDataLength(collectionData.docs.length);

                // filter and make array of books with property name cover_i and author_name
                const booksWithAuthImg = collectionData.docs.filter(book => book.cover_i !== undefined && book.author_name !== undefined).slice(10,22);

                // console.log(firstNum, 'this is random first num');

                // console.log(booksWithAuthImg);

                // use map to return an array of author's names: decided to go with the first one. 
                const authorNames = booksWithAuthImg.map((bookObj)=> bookObj.author_name[0]);
                setAuthors(authorNames);

                // keys are needed to get details of each book
                const bookKeys = booksWithAuthImg.map((bookObj) => bookObj.key);

                // console.log('book keys array', bookKeys);
            
                    const bookDetailsArray = bookKeys.map( async key =>{

                        const bookUrl = `http://openlibrary.org${key}.json`;
                        const bookResponse = await fetch(bookUrl);
                        const bookData = await bookResponse.json();
                        // console.log('book details object', bookData);
                        return bookData;
                        });

                        // booksDetailsArray also returns a promise, and Promise.all() makes sure that I get all the responses back before the books state gets updated. 
                        
                        const imgKeys = booksWithAuthImg.map((bookObj)=> bookObj.cover_i);
                        // console.log('image keys array', imgKeys);
                        
                        const bookImagesArray = imgKeys.map( async (key) =>{
                            
                            const imgUrl = `http://covers.openlibrary.org/b/ID/${key}-L.jpg`;
                            
                            const imgResponse = await fetch(imgUrl);
                            // console.log('img file data', imgResponse.url);
                            return imgResponse.url;
                        })
                        
                    setIsLoading(false);
                    setBooks(await Promise.all(bookDetailsArray));
                    setImages(await Promise.all(bookImagesArray));
            }catch (err) {
                console.log("ERROR:", err);
                setIsError(true); 
                setIsLoading(false);
            }
        };
        getBookData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{

        document.body.classList.add('collection-background');

        return() => {
        document.body.classList.remove('collection-background');
        }

    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClick = (imgUrl) =>{
        // if imgUrl does not exist in bookArray update setBookArray
        setIsError(false); 
        if(!bookArray.includes(imgUrl)){
            if(bookArray.length < 14){
                setBookArray(prev => [...prev, imgUrl]);
            }else if (bookArray.length === 14){
                setOverMaxNum(true);
                console.log('you cannot add more than 14');
            }
        }
    }

    
    return (
        <>
            <Navigation />
            <div className="wrapper">
            {
    
                isLoading? 
                        <div className="loader-container">
                            <img src={loader} className="loader" alt="spinning loader"/>
                        </div> : 
                        <>
                            <div className="collection-title">
                                <h2 className="collection-heading">Bookiverse Quest of {userChoice}</h2>   
                            </div>
                        </>
                }

                {
                    isError?
                    <DisplayError />:null
                }

                {
                    overMaxNum?
                    <LimitMessage />:null
                }

                {/* {
                    !userChoice ?
                    <PageNotFound /> : null
                } */}

                <div className="collection-grid">
                {
                    overMaxNum && !isLoading ? 
                    null:
                    (
                        books.map((book, index)=>{

                            const isBookInArray = bookArray.includes(images[index]);
                            return(
                                
                                <Book 
                                    key={book.key} 
                                    title={book.title} 
                                    description={book.description? book.description.value || book.description : 'Description is currently unavailable'} 
                                    author={authors[index]} 
                                    imgUrl={images[index]}
                                    handleClick={handleClick}
                                    bookInArray={isBookInArray}
                                    />

                            )
                        })
                    )
                }
                </div>
            </div>
        </>
    );
}

export default Collection;
