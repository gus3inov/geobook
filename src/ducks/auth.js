import config from '../../config/app'

const { appName } = config;

export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;

export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${appName}/${moduleName}/SIGN_IN_ERROR`;

const initialState = {
  user: null,
  isAuth: false,
  error: null,
  loading: false
};

export default function auth(state = initialState, action) {
  const { type, payload, error, isAuth } = action;

  switch (type) {
    case SIGN_UP_REQUEST:
      return {
        ...state
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state
      }
    case SIGN_UP_ERROR:
      return {
        ...state
      }
    default:
      return state;
  }
}

export const signUp = (user) => {
  return (dispatch) => {
    dispatch({
      type: SIGN_UP_REQUEST
    });

  };
};

export const signIn = (user) => {
  return (dispatch) => {
    dispatch({
      type: SIGN_IN_REQUEST,
      isAuth: false
    });

  };
};

export const isAuthAction = () => {
  return (dispatch) => {
    dispatch({
      type: SIGN_IN_REQUEST
    });
  };
};
