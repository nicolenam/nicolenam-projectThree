import { Link } from 'react-router-dom';

const CategoryItems = () =>{

    const categoryObjArray = [
        {
            id: 1,
            category: "Animals",
            color: "cat-orange"
        },
        {
            id: 2,
            category: "Fairy Tales",
            color: "cat-green"
        },
        {
            id: 3,
            category: "Adventure",
            color: "cat-yellow"
        },
        {
            id: 4,
            category: "Friendship",
            color: "cat-blue"
        },
        {
            id: 5,
            category: "Bedtime Stories",
            color: "cat-pink"
        }
    ]
    
    return(
        <>
            {
                categoryObjArray.map((category)=>{
                    return(
                        <Link to={`/collection/${category.category}`}>
                            <li 
                                key={category.id} 
                                className={`category-items ${category.color}`}>
                                <p>{category.category}</p>
                            </li>
                        </Link>
                    )
                })
            }
        </>
    )

}

export default CategoryItems;
