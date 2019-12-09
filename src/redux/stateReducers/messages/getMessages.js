import { GETMESSAGES, GETMOREMESSAGES, GETMESSAGE } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  loading: false,
  result: null,
  error: null
};

const getMessages = (state = initialState, action) => {
  switch (action.type) {
    case GETMESSAGE.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GETMESSAGE.SUCCESS:
      const newMessages = state.result.messages.slice();
      const messageIndex = newMessages.findIndex(
        message => message.id === action.payload.message.id
      );
      newMessages.splice(messageIndex, 1, action.payload.message);
      return {
        ...state,
        loading: false,
        result: {
          ...state.result,
          messages: newMessages
        }
      };
    case GETMESSAGE.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case GETMOREMESSAGES.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GETMOREMESSAGES.SUCCESS:
      return {
        ...state,
        loading: false,
        result: {
          ...state.result,
          ...action.payload,
          messages: [...state.result.messages, ...action.payload.messages]
        }
      };
    case GETMOREMESSAGES.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default withAsyncReducer(GETMESSAGES, getMessages);
