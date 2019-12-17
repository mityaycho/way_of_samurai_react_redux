import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11}
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: action.newPostText,
        likesCount: 0
      };
      return {...state, posts: [...state.posts, newPost], newPostText: ''};
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile};
    }
    case SET_STATUS: {
      return {...state, status: action.status};
    }
    case DELETE_POST: {
      return {...state, posts: state.posts.filter(el => el.id !== action.postId)};
    }
    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos}};
    }
    default :
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
  const res = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(res.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const res = await profileAPI.getStatus(userId);
  dispatch(setStatus(res.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const res = await profileAPI.updateStatus(status);
  if (res.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const res = await profileAPI.savePhoto(file);
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const res = await profileAPI.saveProfile(profile);
  if (res.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", {_error: res.data.messages[0]}));
    return Promise.reject(res.data.messages[0]);
  }
};

export default profileReducer;