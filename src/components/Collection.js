import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import loader from '../assets/call-to-action.png';
import Book from "./Book";
import DisplayError from "./DisplayError";
import LimitMessage from "./LimitMessage";
import Navigation from "./Navigation";

 
const Collection = ({bookArray, setBookArray}) => {

    const { category } = useParams();

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [overMaxNum, setOverMaxNum] = useState(false);
    // const [dataLength, setDataLength] = useState('');

    // const [firstNum, setFirstNum] =  useState(''); 

    // useEffect(()=>{

    //     console.log(dataLength, 'new data length');

    //         const min = 0;
    //         const max = dataLength -12;
    //         setFirstNum(Math.floor(Math.random() * (max - min + 1)) + min); 

    // },[dataLength]);

    const url = new URL("https://openlibrary.org/search.json");

    // Subject and audience is hardcoded because it's a virtual bookshelf app for children.
    url.search = new URLSearchParams({
        subject: "picture books",
        q: category,
        audience: "juvenile"
    });

    useEffect(() => {

        const getBookData = async () => {

            setIsError(false); 

            try {
                //Initial call is made here:
                const response = await fetch(url);
                const collectionData = await response.json();

                // setDataLength(collectionData.docs.length);

                // Filter collectionData return an array of books with property name cover_i and author_name.
                const booksWithAuthImg = collectionData.docs.filter(book => book.cover_i !== undefined && book.author_name !== undefined).slice(10,22);

                // Map through collectionData to return an array of author's names: decided to go with the first one. 
                const authorNames = booksWithAuthImg.map((bookObj)=> bookObj.author_name[0]);
                setAuthors(authorNames);

                // Map through collectionData and make an array of book keys which is used to fetch details of each book.
                const bookKeys = booksWithAuthImg.map((bookObj) => bookObj.key);

                    const bookDetailsArray = bookKeys.map( async key =>{

                        const bookUrl = `https://openlibrary.org${key}.json`;
                        const bookResponse = await fetch(bookUrl);
                        const bookData = await bookResponse.json();
                        return bookData;

                    });

                // Map through collectionData and make an array of different set of book keys which is used to fetch img urls of each book.
                const imgKeys = booksWithAuthImg.map((bookObj)=> bookObj.cover_i);
                
                    const bookImagesArray = imgKeys.map( async (key) =>{
                    
                        const imgUrl = `https://covers.openlibrary.org/b/ID/${key}-L.jpg`;
                        const imgResponse = await fetch(imgUrl);
                        return imgResponse.url;

                    });
                        
                    setIsLoading(false);

                    // booksDetailsArray, bookImagesArray returns promises, and Promise.all() makes sure that all the responses get back before the books state gets updated. 
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

    // This useEffect function is used to add and remove a class for background color when component mounts and unmounts.
    useEffect(()=>{

        document.body.classList.add('collection-background');

        return() => {
        document.body.classList.remove('collection-background');
        }

    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    // Handles adding books to the bookArray:
    const handleClick = (imgUrl) =>{
        setIsError(false); 
        //If imgUrl does not exist in bookArray update setBookArray by adding it.
        if(!bookArray.includes(imgUrl)){
            if(bookArray.length < 14){
                setBookArray(prev => [...prev, imgUrl]);
            }else if (bookArray.length === 14){
                //Used to render Limit Message, 
                setOverMaxNum(true);
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
                                <h2 className="collection-heading">Bookiverse Quest of {category}</h2>   
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

                <section className="collection-grid">
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
                </section>
            </div>
        </>
    );
}

export default Collection;
