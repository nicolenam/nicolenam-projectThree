const CategoryItems = ({handleClick}) =>{

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
                        <li 
                            key={category.id} 
                            className={`category-items ${category.color}`} onClick={() =>{handleClick(category.category)}}>
                            <p>{category.category}</p>
                        </li>
                    )
                })
            }
        </>
    )

}

export default CategoryItems;
