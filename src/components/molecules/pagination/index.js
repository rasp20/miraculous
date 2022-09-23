/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './index.css';

function Pagination(props) {
  const { onPageChange, totalCount, siblingCount, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="pt-8">
      <ul
        className={classnames('pagination-container', {
          [className]: className
        })}
      >
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === 1
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange &&
          paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <li className="pagination-item dots" key={DOTS}>
                  &#8230;
                </li>
              );
            }
            return (
              <li
                className={classnames('pagination-item', {
                  selected: pageNumber === currentPage
                })}
                onClick={() => onPageChange(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </li>
            );
          })}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === lastPage
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string
};

Pagination.defaultProps = {
  onPageChange: () => {},
  totalCount: 0,
  siblingCount: 2,
  currentPage: 1,
  pageSize: 1,
  className: ''
};

export default Pagination;
