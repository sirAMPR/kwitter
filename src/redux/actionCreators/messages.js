import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  GETMESSAGES,
  POSTMESSAGE,
  DELETEMESSAGE,
  GETMOREMESSAGES,
  GETMESSAGE
} from "../actionTypes";
import { push } from "connected-react-router";

const url = domain + "/messages";

// this 1 action creator has 2 possible operations
export const getMessages = username => dispatch => {
  dispatch({
    type: GETMESSAGES.START
  });

  const endpointUrl = username ? url + "?username=" + username : url;

  return fetch(endpointUrl, {
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

export const getMoreMessages = username => (dispatch, getState) => {
  // an invariant
  const getMessagesState = getState().messages.getMessages;
  if (getMessagesState.loading) {
    return;
  }

  dispatch({
    type: GETMOREMESSAGES.START
  });

  // const endpointUrl = username ? url + "?username=" + username : url;
  const endpointUrl = new URL(url);
  if (username) {
    endpointUrl.searchParams.set("username", username);
  }

  endpointUrl.searchParams.set(
    "offset",
    getMessagesState.result.messages.length
  );

  return fetch(endpointUrl.toString(), {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETMOREMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETMOREMESSAGES.FAIL, payload: err })
      );
    });
};

export const getMessage = messageId => dispatch => {
  dispatch({
    type: GETMESSAGE.START
  });

  return fetch(url + "/" + messageId, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETMESSAGE.FAIL, payload: err }));
    });
};

const _postMessage = postMessageBody => (dispatch, getState) => {
  dispatch({
    type: POSTMESSAGE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(postMessageBody)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTMESSAGE.FAIL, payload: err }));
    });
};

export const postMessage = postMessageBody => (dispatch, getState) => {
  return dispatch(_postMessage(postMessageBody)).then(() =>
    dispatch(getMessages()).then(() => {
      const username = getState().auth.login.result.username;
      return dispatch(push(`/profile/${username}`));
    })
  );
};

const _deleteMessage = messageId => (dispatch, getState) => {
  dispatch({
    type: DELETEMESSAGE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETEMESSAGE.FAIL, payload: err })
      );
    });
};

export const deleteMessage = messageId => (dispatch, getState) => {
  return dispatch(_deleteMessage(messageId)).then(() => {
    const username = getState().auth.login.result.username;
    const pathname = getState().router.location.pathname;
    if (pathname === "/messagefeed") {
      return dispatch(getMessages());
    }
    return dispatch(getMessages(username));
  });
};
