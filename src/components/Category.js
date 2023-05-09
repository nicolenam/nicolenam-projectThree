import { useEffect } from "react";
import categoryIcons from "../assets/bookegory.png";
import CategoryItems from "./CategoryItems";

const Category = () =>{

    const handleClick = (category) =>{
        console.log('clicked???', category);
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
                </div>
                <ul className="category-list">
                    <CategoryItems handleClick={handleClick} />
                </ul>
            </div>
            <div className="category-img">
                <img src={categoryIcons}/>
            </div>
        </div>
    )
}

export default Category;