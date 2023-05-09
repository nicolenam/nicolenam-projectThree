import { useEffect } from 'react';
import BookshelfItem from './BookshelfItem';
import BookshelfIcon from '../assets/bookshelf-icon.png';

const Bookshelf = () =>{

    useEffect(()=>{

        document.body.classList.add('bookshelf-background');
        return() =>{
            document.body.classList.remove('bookshelf-background');
        }

    })
    return(
        <div className="bookshelf wrapper">
            <div>
                <h2>Bookiverse Bookshelf</h2>
                <div className="bookshelf-grid">
                    <div className="bookshelf-item orange-grid">
                        <img className="bookshelf-icon" src={BookshelfIcon}/>
                    </div>
                    <BookshelfItem color="blue"/>
                    <BookshelfItem color="blue"/>
                    <BookshelfItem color="blue"/>
                    <BookshelfItem color="blue"/>
                    <BookshelfItem color="orange"/>
                    <BookshelfItem color="white"/>
                    <BookshelfItem color="white"/>
                    <BookshelfItem color="white"/>
                    <BookshelfItem color="white"/>
                    <BookshelfItem color="orange"/>
                    <BookshelfItem color="white"/>
                    <BookshelfItem color="white"/>
                    <BookshelfItem color="white"/>
                    <BookshelfItem color="white"/>
                </div>
                {/* <div className="grid-item"><i className="fa-solid fa-circle-plus"></i></div> */}
            </div>
        </div>
    )
}

export default Bookshelf;