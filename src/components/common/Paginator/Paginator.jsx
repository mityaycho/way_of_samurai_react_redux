import React from 'react';
import style from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, pro}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionsSize)
  return <div className={style.pagesNumbers}>
      {pages.map(el => <span className={currentPage === el ? style.selectedPage : undefined}
                             onClick={(event) => (
                               onPageChanged(el))}>{el}</span>)}
    </div>
};

export default Paginator;