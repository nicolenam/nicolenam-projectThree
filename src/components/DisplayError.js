import { Link } from "react-router-dom";
import errorImg from "../assets/error-image.png";
import BookIcon from "../assets/book-icon.png";


const DisplayError = () =>{

    return(
        <div className="error-container">
            <img src={errorImg} className="error-container-img" alt="error message"/>
                <div className="error-message">
                    <span>Oops!</span>
                    <p className="error-paragraph">
                        This collection is off on an exciting adventure! 
                    </p>
                    <p>
                        Choose a different category! 🚀
                    </p>
                    <Link to="/category">
                        <div className="bookshelf-link">
                            <img src={BookIcon} alt="books icon" />
                            <p>View Category</p>
                        </div>
                    </Link>
                </div>
        </div>
    )
}

export default DisplayError;
