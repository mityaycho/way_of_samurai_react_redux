import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-icon-small-size.png';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={style.pagesNumbers}>
          {pages.map(el => {
            return <span className={this.props.currentPage === el && style.selectedPage}
            onClick={(event) => this.onPageChanged(el)}>{el}</span>;
          })}
        </div>
        {this.props.users.map(el => <div key={el.id}>
        <span>
          <div>
            <img className={style.usersImg} src={el.photos.small != null ? el.photos.small : userPhoto} alt=""/>
          </div>
          <div>
            {el.followed ? <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button> :
              <button onClick={() => this.props.follow(el.id)}>Follow</button>}
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
};

export default Users;