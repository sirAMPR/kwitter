import { POSTMESSAGE } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  loading: false,
  result: null,
  error: null
};

const postMessage = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(POSTMESSAGE, postMessage);
