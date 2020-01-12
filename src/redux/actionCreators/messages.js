import { GETMESSAGES, CREATEMESSAGE } from "../actionTypes";
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

// asynchrous action creator
const _createMessage = messageText => (dispatch, getState) => {
  dispatch({
    type: CREATEMESSAGE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ text: messageText })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATEMESSAGE.FAIL, payload: err })
      );
    });
};

// chained action creator
// createMessage -> getMessages
export const createMessage = messageText => (dispatch, getState) => {
  return dispatch(_createMessage(messageText)).then(() =>
    dispatch(getMessages())
  );
};
