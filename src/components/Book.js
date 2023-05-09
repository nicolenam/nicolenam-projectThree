const Book = ({title, author, imgUrl, description}) =>{


    return(
        <>
            <div className="grid-item">
                <p>title: {title} <br/> author: {author} <br/> Description: {description.slice(0,200) + '...'}</p>
                <img src={imgUrl} alt={title}></img>
            </div>
    
        </>
    )
}

export default Book;

