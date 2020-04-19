import {
  SET_USER,
  UNSET_USER,
  LOGIN_LOADING,
  SET_LOCATION,
} from "../../constants/ActionTypes";

const initialState = {
  user: false,
  token: false,
  location: { latitude: 36.7538, longitude: 3.058 },
  loading: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.data,
        token: action.token,
        loading: false,
      };
    }
    case UNSET_USER: {
      return {
        ...state,
        user: false,
        token: false,
        loading: false,
      };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_LOCATION: {
      return {
        ...state,
        location: action.data,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
