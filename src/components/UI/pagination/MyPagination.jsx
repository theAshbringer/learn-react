import React from 'react';
import usePagination from '../../../hooks/usePagination';
import cl from './MyPagination.module.css';

function MyPagination({ totalPages, page, changePage }) {
  const pagesArray = usePagination(totalPages);
  return (
    <div className={cl.page}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          className={page === p ? [cl.number, cl.active].join(' ') : cl.number}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

export default MyPagination;
