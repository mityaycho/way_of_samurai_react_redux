import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user-icon-small-size.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={style.pagesNumbers}>
        {pages.map(el => <span className={props.currentPage === el && style.selectedPage}
                               onClick={(event) => props.onPageChanged(el)}>{el}</span>)}
      </div>
      {props.users.map(el => <div key={el.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + el.id}>
            <img className={style.usersImg}
                 src={el.photos.small != null ? el.photos.small : userPhoto} alt=""/>
            </NavLink>
          </div>
          <div>
            {el.followed ?
              <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                  {withCredentials: true,
                  headers: {"API-KEY": "5ac078f7-4935-4223-bad6-63f58b80cd23"}})
                  .then(res => {
                    if (res.data.resultCode === 0) {
                      props.unfollow(el.id)
                    }
                  });
                props.unfollow(el.id)
              }}>Unfollow</button> :
              <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},
                  {withCredentials: true,
                    headers: {"API-KEY": "5ac078f7-4935-4223-bad6-63f58b80cd23"}})
                  .then(res => {
                    if (res.data.resultCode === 0) {
                      props.follow(el.id)
                    }
                  });
                props.follow(el.id)
              }}>Follow</button>}
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