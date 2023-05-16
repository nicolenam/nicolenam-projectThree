import { useEffect } from "react";
import categoryIcons from "../assets/bookegory.png";
import CategoryItems from "./CategoryItems";
import Navigation from "./Navigation";


const Category = () =>{

    useEffect(()=>{

        document.body.classList.add('category-background');
        return() =>{
            document.body.classList.remove('category-background');
        }

    },[]);

    return (

        <>
        <Navigation />
            <div className="category wrapper">
                <div className="category-container">
                    <div className="category-content">
                        <h2>Book-egories</h2>
                        <p>
                        Discover your book-venture! Choose a bookegory that captivates your imagination and let the reading magic begin!
                        </p>
                        <img className="category-img" src={categoryIcons} alt="category icons"/>
                    </div>
                    <ul className="category-list">
                        <CategoryItems/>
                    </ul> 
                </div>
            </div>

        </>
    )
}

export default Category;