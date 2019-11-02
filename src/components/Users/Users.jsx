import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user-icon-small-size.png';


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
    return (
      <div>
        <div className={style.pagesNumbers}>
          {pages.map(el => {
            return <span className={props.currentPage === el && style.selectedPage}
            onClick={(event) => onPageChanged(el)}>{el}</span>;
          })}
        </div>
        {props.users.map(el => <div key={el.id}>
        <span>
          <div>
            <img className={style.usersImg} src={el.photos.small != null ? el.photos.small : userPhoto} alt=""/>
          </div>
          <div>
            {el.followed ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button> :
              <button onClick={() => props.follow(el.id)}>Follow</button>}
          </div>
        </span>
          <span>
          <span>
           <div>{el.name}</div>
           <div>{el.status}</div>
          </span>
          <span>
           <div>{"el.location.country"}</div>
           <div>{"el.location.city"}</div>
          </span>
        </span>
        </div>)}
      </div>
    );
};

export default Users;