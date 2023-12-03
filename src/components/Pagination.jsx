import React from 'react'

function Pagination({changePageNo, dataPerPage, data, currentPage}) {
    let numbers = [];
    for (let i = 1; i <= Math.ceil(data / dataPerPage); i++) {
        numbers.push(i);
    }
    return (
        <div className='pagination'>
            { currentPage > 1 ?<button onClick={() => changePageNo(currentPage - 1)}>&lt;</button> : null}
            {numbers && numbers.map(no => (
                <button key={no} onClick={() => changePageNo(no)}>{no}</button>
            ))}
            {currentPage < Math.ceil(data / dataPerPage) ? <button onClick={() => changePageNo(currentPage + 1)}>&gt;</button> : null}
        </div>
    )
}

export default Pagination
