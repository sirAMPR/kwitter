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

const SIGNUP = createActions("signup");
export const signup = signupData => dispatch => {
  dispatch(SIGNUP.START());

  return fetch(url + "/signup", {
    method: "POST",
    headers:  jsonHeaders,
    body: JSON.stringify(signupData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(SIGNUP.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(SIGNUP.FAIL(err))));
};

const LOGIN = createActions("login");
export const login = loginData => dispatch => {
  dispatch(LOGIN.START());

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LOGIN.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LOGIN.FAIL(err))));
};

const LOGOUT = createActions("logout");
export const logout = () => (dispatch, getState) => {
  dispatch(LOGOUT.START());

  const token = getState().auth.login.result.token;

  return fetch(url + "/logout", {
    method: "GET",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LOGOUT.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LOGOUT.FAIL(err))));
};

export const reducers = {
  signup: createReducer(getInitStateFromStorage("signup", asyncInitialState), {
    ...asyncCases(SIGNUP),
    [LOGOUT.SUCCESS.toString()]: (state, action) => asyncInitialState
  }),
  login: createReducer(getInitStateFromStorage("login", asyncInitialState), {
    ...asyncCases(LOGIN),
    [LOGOUT.SUCCESS.toString()]: (state, action) => asyncInitialState
  }),
  logout: createReducer(asyncInitialState, {
    ...asyncCases(LOGOUT)
  })
};
