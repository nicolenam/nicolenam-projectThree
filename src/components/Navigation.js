import BookIcon from "../assets/book-icon.png";
import ClosedBook from "../assets/closed-book.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <>
            <div className={`${isOpen ? `overlay` : ``}`}></div>
            <nav className="nav wrapper">
                <div className="navImg-container" onClick={handleClick}>
                    <img className={`closed-book ${isOpen ? `hide` : ``}`} src={ClosedBook} alt="books icon" />
                    <img className={`${isOpen ? `` : `hide`}`} src={BookIcon} alt="books icon" />
                </div>
                <ul className={`nav-items ${isOpen ? `isOpen` : ``}`} onClick={handleClick}>
                    <Link to="/">
                        <li className="category-items cat-orange">Home</li>
                    </Link>
                    <Link to="/bookshelf">
                        <li className="category-items cat-green">Bookshelf</li>
                    </Link>
                    <Link to="/category">
                        <li className="category-items cat-pink">Bookigory</li>
                    </Link>
                    <Link to="/collection">
                        <li className="category-items cat-yellow">Collection</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;