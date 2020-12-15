import React from 'react';

export default function Pagination({ routesPerPage, totalRoutes, paginate }) {
  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalRoutes / routesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
                {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
