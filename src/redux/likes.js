import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/likes";

// Add like
const LIKE = createActions("like");
export const like = likeData => (dispatch, getState) => {
  dispatch(LIKE.START());

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(likeData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LIKE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LIKE.FAIL(err))));
};

// Remove like

export const reducers = {
  like: createReducer(asyncInitialState, {
    ...asyncCases(LIKE)
  })
};
