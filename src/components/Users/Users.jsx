import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user-icon-small-size.png';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                 totalUsersCount={totalUsersCount} pageSize={pageSize} />
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
              <button disabled={props.followingInProgress.some(id => id === el.id)}
                      onClick={() => {props.unfollow(el.id)}}>Unfollow</button> :
              <button disabled={props.followingInProgress.some(id => id === el.id)}
                      onClick={() => {props.follow(el.id)}}>Follow</button>}
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