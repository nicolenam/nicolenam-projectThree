import heartIcon from "../assets/heart-icon.png"

const Book = ({title, author, imgUrl, description, handleClick}) =>{

    return(
        <div className="book-item">
            <img className="heart-icon" src={heartIcon} alt="heart icon" />
            <div className="img-container">
                <img src={imgUrl} alt={title} onClick={()=>{handleClick(imgUrl)}}/>
                <div className="heart-icon"></div>
            </div>
            <div>
                <h3>{title}</h3>
                <p>By {author}</p>
                <p>{`${description.slice(0,200)}...`}</p>
            </div>
        </div>
    )
}

export default Book;

