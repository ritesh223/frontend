import React, { useState } from 'react';

const Pagination = ({ filteredProductCount, productsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(filteredProductCount / productsPerPage); i++) {
        pages.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= pageNumberLimit) {
        pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>;
    }

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? 'active' : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    return (
        <div>
            <ul className="pageNumbers">
                <li>
                    <button onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>
                        Prev
                    </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    <button onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
