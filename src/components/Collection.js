import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Book from "./Book";
import loader from '../assets/call-to-action.png';
 

const Collection = () => {

    const path = useLocation();
    const category = new URLSearchParams(path.search);
    const userChoice = category.get('category');

    console.log(userChoice, 'omg!!!!! it is here 🌈');

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = new URL("http://openlibrary.org/search.json");

    url.search = new URLSearchParams({
        subject: "picture books",
        q: userChoice,
        audience: "juvenile"
    });

    useEffect(() => {

        const getBookData = async () => {
            try {
                const response = await fetch(url);
                const collectionData = await response.json();

                // console.log(collectionData.docs)

                // filter and make array of books with property name cover_i and author_name
                const booksWithAuthImg = collectionData.docs.filter(book => book.cover_i !== undefined && book.author_name !== undefined).slice(10,22);

                // console.log(booksWithAuthImg);

                // use map to return an array of author's names
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

                        setBooks(await Promise.all(bookDetailsArray));
                    // booksDetailsArray also returns a promise, and Promise.all() makes sure that I get all the responses back before the books state gets updated. 
                    
                    const imgKeys = booksWithAuthImg.map((bookObj)=> bookObj.cover_i);
                    // console.log('image keys array', imgKeys);
                    
                    const bookImagesArray = imgKeys.map( async (key) =>{
                        
                        const imgUrl = `http://covers.openlibrary.org/b/ID/${key}-L.jpg`;
                        
                        const imgResponse = await fetch(imgUrl);
                        // console.log('img file data', imgResponse.url);
                        return imgResponse.url;
                    })
                    
                    setImages(await Promise.all(bookImagesArray));
                    setIsLoading(false);
            }catch (err) {
                console.log(err);
            }
        };
        getBookData();
    }, []);

    return (
        <div className="collection-grid">
        {
            isLoading?
                <div className="loader-container">
                    <img src={loader} className="loader" alt="spinning loader"/>
                </div>
            :
            books.map((book, index)=>{

                return(
                    
                    <Book 
                        key={index} 
                        title={book.title} 
                        description={book.description? book.description.value || book.description : 'Description is currently unavailable'} 
                        author={authors[index]} 
                        imgUrl={images[index]}/>
                )

            })
        }

        </div>
    );
}

export default Collection;
