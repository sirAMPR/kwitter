import { GETMESSAGES } from "../actionTypes";
import { jsonHeaders, handleJsonResponse, domain } from "./constants";

const url = domain + "/messages";

export const getMessages = () => dispatch => {
  dispatch({
    type: GETMESSAGES.START
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETMESSAGES.FAIL, payload: err }));
    });
};
