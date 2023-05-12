import errorImg from '../assets/error-image.png';

const DisplayError = () =>{

    return(
        <div className="error-container">
            <img src={errorImg} className="error-container-img" alt="error message"/>
                <div className="error-message">
                    <span>Oops!</span>
                    <p>
                        This collection is off on an exciting adventure! 
                    </p>
                    <p className="error-paragraph">
                        Stay tuned, and get ready to embark on an incredible reading journey! 🚀
                    </p>
                </div>
        </div>
    )
}

export default DisplayError;
