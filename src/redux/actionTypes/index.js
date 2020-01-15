const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
export const GETMESSAGES = createActionTypes("GETMESSAGES");
export const CREATEMESSAGE = createActionTypes("CREATEMESSAGE");
export const CREATEUSER = createActionTypes("CREATEUSER");
export const DELETEUSER = createActionTypes("DELETEUSER");
