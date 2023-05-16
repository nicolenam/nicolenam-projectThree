import loader from '../assets/call-to-action.png';

const Loader = () =>{
    return(
        <div className="loader-container">
            <img src={loader} className="loader" alt="spinning loader"/>
        </div> 
    )
};

export default Loader;

