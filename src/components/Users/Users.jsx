import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, photoUrl: "https://perfecto-web.pro/uploads/uifaces/ui-7.jpg",
        followed: false, fullName: "Dmitriy", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
      {id: 2, photoUrl: "https://perfecto-web.pro/uploads/uifaces/ui-7.jpg",
        followed: true, fullName: "Sasha", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}},
      {id: 3, photoUrl: "https://perfecto-web.pro/uploads/uifaces/ui-7.jpg",
        followed: false, fullName: "Andrey", status: "I am a boss too", location: {city: "Kiev", country: "Ukraine"}},

    ])
  }
  return (
    <div>
      {props.users.map(el => <div key={el.id}>
        <span>
          <div>
            <img src={el.photoUrl} alt=""/>
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
           <div>{el.location.country}</div>
           <div>{el.location.city}</div>
          </span>
        </span>
      </div>)}
    </div>
  );
}

export default Users;