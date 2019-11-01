import React from 'react';
import style from './Users.module.css';
import * as axios from  'axios';
import userPhoto from '../../assets/images/user-icon-small-size.png';

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(res => {
        props.setUsers(res.data.items)
      });
  };

  return (
    <div>
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
           <div>{el.fullName}</div>
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
}

export default Users;