import config from '../../config/app';
import AuthService from '../services/AuthService';

const {
  appName,
  api
} = config;

export const moduleName = 'auth';

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
  const {
    type,
    payload,
    error,
    isAuth
  } = action;

  switch (type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload
      }
    case SIGN_IN_ERROR:
      return {
        ...state,
        error,
      }
    default:
      return state;
  }
}

export const signIn = (user) => {
  return (dispatch) => {
    dispatch({
      type: SIGN_IN_REQUEST,
      isAuth: false
    });
    console.log(`${api}/api/login`)
    fetch(`${api}/api/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then(async(res) => {

      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: await res.json(),
      })

      AuthService.authenticateUser('secret123')
    }).catch(err => {
      console.error(err)
    })
  };
}
