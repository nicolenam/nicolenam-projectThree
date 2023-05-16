const Book = ({title, author, imgUrl, description, handleClick, bookInArray}) =>{

    return (
        <div className={`book-item ${bookInArray? "disable-click" : ""}`}>
            <div className="img-container">
                <img  src={imgUrl} alt={title} onClick={()=>{handleClick(imgUrl)}}/>
                <div className="heart-icon"></div>
            </div>
            <div>
                <h3>{title}</h3>
                <p>By {author}</p>
                <p className="book-description">{`${description.slice(0,100)}...`}</p>
            </div>
        </div>
    )
}

export default Book;

