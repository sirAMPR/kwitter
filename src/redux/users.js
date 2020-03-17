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
export const getUser = () => (dispatch, getState) => {
  dispatch(GET_USER.START());

  const { username } = getState().auth.login.result;

  return fetch(url + "/users/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => dispatch(GET_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(GET_USER.FAIL(err))));
};

// set profile picture
const SET_PROFILE_PIC = createActions("setProfilePic");
export const setProfilePic = setProfilePicData => (dispatch, getState) => {
  dispatch(SET_PROFILE_PIC.START());

  let data = new FormData(setProfilePicData);
  console.log(data);

  const { username, token } = getState().auth.login.result;

  return fetch(url + `/users/${username}/picture`, {
    method: "PUT",
    headers: { Authorization: "Bearer " + token, Accept: "application/json" },
    body: data
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
  }),
  setProfilePic: createReducer(asyncInitialState, {
    ...asyncCases(SET_PROFILE_PIC)
  })
};
