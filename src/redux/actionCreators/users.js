import { CREATEUSER } from "../actionTypes";
import { jsonHeaders, handleJsonResponse, domain } from "./constants";
import { push } from "connected-react-router";

const url = domain + "/users";

const _createUser = (username, displayName, password) => dispatch => {
  dispatch({
    type: CREATEUSER.START
  });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ username, displayName, password })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: CREATEUSER.FAIL, payload: err }));
    });
};

export const createUser = (username, displayName, password) => dispatch => {
  return dispatch(_createUser(username, displayName, password)).then(() => {
    dispatch(push("/"));
  });
};
