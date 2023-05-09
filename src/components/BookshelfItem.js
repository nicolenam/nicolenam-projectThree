import { useEffect } from 'react';
import addBtn from '../assets/plus-icon.png';

const BookshelfItem = ({color}) =>{

    console.log(color)

    return(
        <div className={`bookshelf-item ${color}-grid`}>
            <img className="bookshelf-img" src={addBtn} />
        </div>
    )
}

export default BookshelfItem;
