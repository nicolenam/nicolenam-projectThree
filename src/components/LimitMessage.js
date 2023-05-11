import errorImg from '../assets/error-image.png';

const LimitMessage = () =>{
    return(
        <div className="error-container">
        <img src={errorImg} alt="error message"/>
            <div className="limit-message">
                <span>Oops!</span>
                <p>
                You have reached the maximum number of books in your collection!
                </p>
                <p>
                Remove books before you can add more.
                </p>
                <button>Go to Bookshelf</button>
            </div>
    </div>
    )
}

export default LimitMessage;