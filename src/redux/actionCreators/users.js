import { CREATEUSER, DELETEUSER } from "../actionTypes";
import { jsonHeaders, handleJsonResponse, domain } from "./constants";
import { push } from "connected-react-router";
import { logout } from "./auth";

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

export const deleteUser = () => (dispatch, getState) => {
  dispatch({
    type: DELETEUSER.START
  });

  const username = getState().auth.login.result.username;
  const token = getState().auth.login.result.token;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    });
};
