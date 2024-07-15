import React from "react"
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'; // You can create your own CSS module

const Pagination = ({ pageCount, onPageChange }) => {
    console.log(pageCount)
  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={onPageChange}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
    />
  );
};

export default Pagination;
