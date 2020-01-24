import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11}
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("mityaycho front-end");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it('message of nes post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator("mityaycho front-end");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts[2].message).toBe("mityaycho front-end");
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(1);
});