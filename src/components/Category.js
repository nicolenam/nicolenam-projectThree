import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import categoryIcons from "../assets/bookegory.png";
import CategoryItems from "./CategoryItems";

const Category = () =>{

    const [userChoice, setUserChoice] = useState('');

    const handleClick = (category) =>{
        console.log('User chose:', category);
        setUserChoice(category);
    }
    
    useEffect(()=>{

        document.body.classList.add('category-background');
        return() =>{
            document.body.classList.remove('category-background');
        }

    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="category wrapper">
            <div className="category-container">
                <div className="category-content">
                    <h2>Book-egories</h2>
                    <p>
                    Discover your book-venture! Choose a bookegory that captivates your imagination and let the reading magic begin!
                    </p>
                        <img className="category-img" src={categoryIcons} alt="category icons"/>
                </div>
                {
      
                    userChoice?
                    <ul className="category-list">
                        <Link to={`/collection?category=${userChoice}`}className="category-link" >
                            <CategoryItems handleClick={handleClick} />
                        </Link>
                    </ul> 
                    :
                    <ul className="category-list">
                        <CategoryItems handleClick={handleClick} />
                    </ul> 

                }
            </div>
            
        </div>
    )
}

export default Category;