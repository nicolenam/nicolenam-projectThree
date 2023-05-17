import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Book from "./Book";
import DisplayError from "./DisplayError";
import LimitMessage from "./LimitMessage";
import Navigation from "./Navigation";
import Loader from "./Loader";
import Pagination from "./Pagination";

 
const Collection = ({bookArray, setBookArray}) => {

    const { category } = useParams();

    // Arrays for data storing
    const [collectionData, setCollectionData] = useState([]);
    // console.log(collectionData);

    // States for error handling, etc
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [overMaxNum, setOverMaxNum] = useState(false);

    // Resource used for Pagination 🦋 "https://medium.com/geekculture/building-a-javascript-pagination-as-simple-as-possible-a9c32dbf4ac1" 🦋

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageList, setCurrentPageList] = useState([]);
    
    // Pagination
    const numberOfBooks = collectionData.length;
    const booksPerPage = 15;
    const numberOfPages = Math.ceil(numberOfBooks/booksPerPage);

    const paginateCollection = (page) =>{

        setCurrentPage(page);
        
        // Define indexes used for slice method used create a shallow copy of the arrays used for pagination
        const startIndex = (page - 1) * booksPerPage; 
        const endIndex = startIndex + booksPerPage;
        
        console.log(startIndex, endIndex);
        console.log( "is this working", collectionData.slice(startIndex,endIndex));
        setCurrentPageList(collectionData.slice(startIndex,endIndex));
    }

    const updatePageNum = (e) =>{

        if(e.target.innerHTML === "Next" && currentPage < numberOfPages){
            setCurrentPage(prev => prev + 1);
        }else if (e.target.innerHTML === "Prev" && currentPage > 1){
            setCurrentPage(prev => prev -1);
        }

    }

    useEffect(()=>{
        paginateCollection(currentPage);
    },[currentPage, collectionData]);

    // Search parameters
    const url = new URL("https://openlibrary.org/search.json");
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

                console.log("COLLECTION DATA:", collectionData);
                
                // Filter collectionData return an array of books with property name cover_i and author_name.
                let booksWithAuthImg;

                // This condition is to avoid CORS err
                if(category === "Fairy Tales"){
                    booksWithAuthImg = collectionData.docs.filter(book => book.cover_i !== undefined && book.author_name !== undefined).slice(0, 30);
                }else{
                    booksWithAuthImg = collectionData.docs.filter(book => book.cover_i !== undefined && book.author_name !== undefined);
                }

                // Map through collectionData to return an array of author's names: decided to go with the first one. 
                const authorNames = booksWithAuthImg.map((bookObj)=> bookObj.author_name[0]);
                // Map through collectionData and make an array of book keys which is used to fetch details of each book.
                const bookKeys = booksWithAuthImg.map((bookObj) => bookObj.key);
                const imgKeys = booksWithAuthImg.map((bookObj)=> bookObj.cover_i);

                const bookDetailsArray = bookKeys.map(async (key, index) => {

                    const bookUrl = `https://openlibrary.org${key}.json`;
                    const bookResponse = await fetch(bookUrl);
                    const bookData = await bookResponse.json();
                    // console.log("BOOK DETAILS DATA:", bookData);

                    const imgUrl = `https://covers.openlibrary.org/b/ID/${imgKeys[index]}-L.jpg`;
                    const imgResponse = await fetch(imgUrl);

                    return {
                      key: bookData.key,
                      title: bookData.title,
                      description: bookData.description ? bookData.description.value || bookData.description : 'Description is currently unavailable',
                      author: authorNames[index],
                      imgUrl: imgResponse.url
                    };
                });
          
                  setCollectionData(await Promise.all(bookDetailsArray));

                  setIsLoading(false);
                } catch (err) {
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

    }); 
    
    // Function for adding books url to the bookArray:
    const handleClick = (imgUrl) =>{
        setIsError(false); 
        if(!bookArray.includes(imgUrl)){
            if(bookArray.length < 14){
                setBookArray(prev => [...prev, imgUrl]);
            }else if (bookArray.length === 14){
                // update overMaxNum state to render Limit Message, 
                setOverMaxNum(true);
            }
        }
    };
    
    return (
        <>
            <Navigation />

            <div className="wrapper">
            {
    
                isLoading? 
                    <Loader />
                    : 
                        <>
                            <div className="collection-title">
                                {category !== 'undefined' ? (
                                    <h2 className="collection-heading">Bookiverse Quest of {category}</h2>
                                ) : (
                                    <h2 className="collection-heading">Please Choose a Category!</h2>
                                )}
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
                
                <section className="collection-grid">
                {
                    overMaxNum && !isLoading ? 
                    null:
                    (
                       currentPageList.map((book) =>{

                        const isBookInArray = bookArray.includes(book.imgUrl);

                        return(

                                <Book 
                                    key={book.key}
                                    title={book.title} 
                                    author={book.author} 
                                    imgUrl={book.imgUrl}
                                    description={book.description}
                                    handleClick={handleClick}
                                    bookInArray={isBookInArray}
                                />
                       
                        )

                       })

                    )

                }
                </section>

                {
                    !isLoading?

                    <Pagination updatePageNum={updatePageNum} numberOfPages={numberOfPages} currentPage={currentPage} paginateCollection={paginateCollection}/>
                    :
                    null
                }
            </div>
        </>
    );
}

export default Collection;
