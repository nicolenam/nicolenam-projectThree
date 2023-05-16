import { Link } from 'react-router-dom';

const CategoryItems = () =>{

    const categoryObjArray = [
        {
            id: 1,
            title: "Animals",
            color: "cat-orange"
        },
        {
            id: 2,
            title: "Fairy Tales",
            color: "cat-green"
        },
        {
            id: 3,
            title: "Adventure",
            color: "cat-yellow"
        },
        {
            id: 4,
            title: "Friendship",
            color: "cat-blue"
        },
        {
            id: 5,
            title: "Bedtime Stories",
            color: "cat-pink"
        }
    ]
    
    return(
        <>
            {
                categoryObjArray.map((category)=>{
                    return(
                        <Link to={`/collection/${category.title}`}>
                            <li 
                                key={category.id} 
                                className={`category-items ${category.color}`}>
                                <p>{category.title}</p>
                            </li>
                        </Link>
                    )
                })
            }
        </>
    )

}

export default CategoryItems;
