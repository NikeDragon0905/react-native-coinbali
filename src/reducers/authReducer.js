import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  // ... other action types
} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  registered: false,
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loading: false,
        error: action.payload,
      };
      case REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
          registered: false,
          error: null,
        };
  
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          registered: true,
          error: null,
        };
  
      case REGISTER_FAILURE:
        return {
          ...state,
          loading: false,
          registered: false,
        };
    case LOGOUT:
      return initialState;

    // ... handle other actions

    default:
      return state;
  }
};

export default authReducer;