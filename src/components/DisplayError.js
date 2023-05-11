import errorImg from '../assets/error-image.png';
import { useState } from 'react';

const DisplayError = ({errMessage}) =>{

    return(
        <div className="error-container">
            <img src={errorImg}/>

            {/* {
                errMessage ?
                <div className="error-message">
                    <span>{errMessage}</span>
                </div>
            : */}
                <div className="error-message">
                    <span>Oops!</span>
                    <p>
                        This collection is off on an exciting adventure! Stay tuned, and get ready to embark on an incredible reading journey! 🚀
                    </p>
                </div>
            {/* } */}
        </div>
    )
}

export default DisplayError;
