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

const url = domain + "/messages";

// get a list of messages
const LIST_MESSAGE = createActions("listMessage");
export const listMessage = (limit = 100, offset = 0, username) => dispatch => {
  dispatch(LIST_MESSAGE.START());

  const endpointUrl =
    url +
    "?limit=" +
    limit +
    "&offset=" +
    offset +
    (username ? "&username=" + username : "");

  return fetch(endpointUrl, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LIST_MESSAGE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LIST_MESSAGE.FAIL(err))));
};

// create a message
const ADD_MESSAGE = createActions("addMessage");
export const addMessage = addMessageData => (dispatch, getState) => {
  dispatch(ADD_MESSAGE.START());

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(addMessageData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(ADD_MESSAGE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(ADD_MESSAGE.FAIL(err))));
};

// delete a message

export const reducers = {
  listMessage: createReducer(asyncInitialState, {
    ...asyncCases(LIST_MESSAGE)
  }),
  addMessage: createReducer(asyncInitialState, {
    ...asyncCases(ADD_MESSAGE)
  })
};
