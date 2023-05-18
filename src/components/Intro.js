import { Link } from 'react-router-dom'; 
import { useEffect } from 'react';
import introImg from '../assets/intro-icon.png';
import callToAction from '../assets/call-to-action.png';

const Intro = () =>{

    useEffect(()=>{

        document.body.classList.add('intro-background');
        
        return() =>{
            document.body.classList.remove('intro-background');
        }

    });

    return(

        <section className="intro wrapper">
            <div className="intro-content">
                <h1>Welcome to Bookiverse!</h1>
                <p>Embark on a bookish adventure in Bookiverse! Create your own personalized bookshelf and immerse yourself in a world of stories and imagination!</p>
            </div>
            <div className="intro-imgContainer">
                <img className="intro-img" src={introImg} alt="colorful shapes"/>
                <Link to="/bookshelf">
                    <img className="intro-triangle" src={callToAction} alt="triangle button" />
                </Link>
            </div>
        </section>       
    )
};

export default Intro;