import errorImg from '../assets/error-image.png';

const DisplayError = () =>{
    return(
        <div className="error-container">
            <img src={errorImg}/>
            <div className="error-message">
                <span>Oops!</span>
                <p>
                    This collection is off on an exciting adventure! Stay tuned, and get ready to embark on an incredible reading journey! 🚀
                </p>
            </div>
        </div>
    )
}

export default DisplayError;
