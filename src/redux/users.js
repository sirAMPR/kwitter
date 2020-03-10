import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  // getInitStateFromStorage,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain;

// create user
const CREATE_USER = createActions("createUser");
export const createUser = createUserData => dispatch => {
  dispatch(CREATE_USER.START());

  return fetch(url + "/users", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(createUserData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(CREATE_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(CREATE_USER.FAIL(err))));
};

// get user data
const GET_USER = createActions("getUser");
export const getUser = getUserData => dispatch => {
  dispatch(GET_USER.START());

  return fetch(url + "/users/rad", {
    method: "GET",
    headers: jsonHeaders,
    body: JSON.stringify(getUserData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(GET_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(GET_USER.FAIL(err))));
};

// set profile picture data
const SET_PROFILE_PIC = createActions("setProfilePic");
export const setProfilePic = setProfilePicData => dispatch => {
  dispatch(SET_PROFILE_PIC.START());

  return fetch(url + "/users/jndetke2184/picture", {
    method: "PUT",
    headers: jsonHeaders,
    body: JSON.stringify(setProfilePicData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(SET_PROFILE_PIC.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(SET_PROFILE_PIC.FAIL(err))));
};

export const reducers = {
  createUser: createReducer(asyncInitialState, {
    ...asyncCases(CREATE_USER)
  }),
  getUser: createReducer(asyncInitialState, {
    ...asyncCases(GET_USER)
    // [GET_USER.SUCCESS]: (state, action) => asyncInitialState
  }),
  setProfilePic: createReducer(asyncInitialState, {
    ...asyncCases(SET_PROFILE_PIC)
  })
};
