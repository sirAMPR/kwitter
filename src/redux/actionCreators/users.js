import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER, POSTUSER } from "../actionTypes";
import { login } from "./auth";

const url = domain + "/users";

export const getUser = username => dispatch => {
  dispatch({ type: GETUSER.START });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

const _postUser = registerData => dispatch => {
  dispatch({ type: POSTUSER.START });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTUSER.FAIL, payload: err }));
    });
};

export const postUser = registerData => dispatch => {
  return dispatch(_postUser(registerData)).then(() =>
    dispatch(
      login({
        username: registerData.username,
        password: registerData.password
      })
    )
  );
};
