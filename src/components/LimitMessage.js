import errorImg from "../assets/error-image.png";
import { Link } from "react-router-dom";
import BookIcon from "../assets/book-icon.png";

const LimitMessage = () =>{
    return(
        <div className="error-container">
        <img src={errorImg} className="error-container-img" alt="error message"/>
            <div className="error-message">
                <span>Oops!</span>
                <p className="limit-message">
                You have reached the maximum number of books in your collection!
                </p>
                <p>
                Remove books before you can add more.
                </p>

                <Link to="/bookshelf">
                    <div className="bookshelf-link">
                        <img src={BookIcon} alt="books icon" />
                        <p>View Bookshelf</p>
                    </div>
                </Link>
            </div>
    </div>
    )
}

export default LimitMessage;