const Book = ({title, author, imgUrl, description, handleClick, bookInArray}) =>{

    return (
        <div className={`book-item ${bookInArray? "disable-click" : ""}`}>
            <div className="img-container">
                <img  src={imgUrl} alt={title} onClick={()=>{handleClick(imgUrl)}}/>
            </div>
            <div>
                <h3>{title}</h3>
                <p>By {author}</p>
                <p className="book-description">{description}</p>
            </div>
        </div>
    )
}

export default Book;

