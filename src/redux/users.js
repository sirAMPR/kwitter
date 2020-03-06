import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  getInitStateFromStorage,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/auth";

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

export const reducers = {
  createUser: createReducer(asyncInitialState, {
    ...asyncCases(CREATE_USER)
  })
};
