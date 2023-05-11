const LimitMessage = () =>{
    return(
        <div className="error-container">
        <img src={errorImg}/>
            <div className="error-message">
                <span>Oops!</span>
                <p>
                    You have reached your limit ! P
                </p>
            </div>
    </div>
    )
}

export default LimitMessage;