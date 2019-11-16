import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5ac078f7-4935-4223-bad6-63f58b80cd23"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },
  followUsers(id) {
    return instance.post(`follow/${id}`, {})
      .then(res => res.data);
  },
  unfollowUsers(id) {
    return instance.delete(`follow/${id}`)
      .then(res => res.data);
  },
  setUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(res => res.data);
  },
  setAuthUserData(){
    return instance.get(`auth/me`)
      .then(res => res.data);
  }
};