const Pagination = ({updatePageNum, numberOfPages, currentPage, paginateCollection}) =>{

    let pages = [];

    for(let i = 1; i <= numberOfPages ; i++){
        pages.push(i);
    }

    return(
        <div className="pagination">
            <div>
                <button onClick={updatePageNum}>Prev</button>
                {
                    pages.map((page)=>{
                        return(
                            <a onClick={()=>{paginateCollection(page)}}>{page}</a>
                        )
                    })
                }
                <button onClick={updatePageNum}>Next</button>
            </div>
            <p>Page {currentPage} of {numberOfPages} pages</p>
        </div>
    )
}

export default Pagination;