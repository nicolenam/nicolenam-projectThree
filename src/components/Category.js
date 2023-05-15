import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import categoryIcons from "../assets/bookegory.png";
import CategoryItems from "./CategoryItems";
import Navigation from "./Navigation";


const Category = () =>{

    const [userChoice, setUserChoice] = useState('');
    const navigate = useNavigate();

    const handleClick = (category) =>{
        setUserChoice(category);
    }
    
    useEffect(()=>{
        if(userChoice){
            navigate(`/collection?category=${userChoice}`);
        }

    },[userChoice, navigate])

    useEffect(()=>{

        document.body.classList.add('category-background');
        return() =>{
            document.body.classList.remove('category-background');
        }

    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return (

        <>
        <Navigation />
            <section className="category wrapper">
                <div className="category-container">
                    <div className="category-content">
                        <h2>Book-egories</h2>
                        <p>
                        Discover your book-venture! Choose a bookegory that captivates your imagination and let the reading magic begin!
                        </p>
                        <img className="category-img" src={categoryIcons} alt="category icons"/>
                    </div>
                    <ul className="category-list">
                        <CategoryItems handleClick={handleClick} />
                    </ul> 
                </div>
            </section>

        </>
    )
}

export default Category;