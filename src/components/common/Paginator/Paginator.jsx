import React from 'react';
import style from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div className={style.pagesNumbers}>
      {pages.map(el => <span className={currentPage === el && style.selectedPage}
                             onClick={(event) => (
                               onPageChanged(el))}>{el}</span>)}
    </div>
};

export default Paginator;