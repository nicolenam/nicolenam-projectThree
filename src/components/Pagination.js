const Pagination = ({updatePageNum, numberOfPages, currentPage}) =>{
    return(
        <div className="pagination">
            <button onClick={updatePageNum}>Prev</button>
            <p>{currentPage} of</p>
            <p>total {numberOfPages} pages</p>
            <button onClick={updatePageNum}>Next</button>
        </div>
    )
}

export default Pagination;