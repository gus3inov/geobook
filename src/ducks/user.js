import config from '../../config/app';
import AuthService from '../services/AuthService';

const {
  appName,
  api
} = config;

export const moduleName = 'user';

export const ADD_COORDS_REQUEST = `${appName}/${moduleName}/ADD_COORDS_REQUEST`;
export const ADD_COORDS_SUCCESS = `${appName}/${moduleName}/ADD_COORDS_SUCCESS`;
export const ADD_COORDS_ERROR = `${appName}/${moduleName}/ADD_COORDS_ERROR`;

const initialState = {
  : null,
  error: null,
  loading: false
};

export default function user(state = initialState, action) {
  const {
    type,
    payload,
    error,
    isAuth
  } = action;

  switch (type) {
    case ADD_COORDS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADD_COORDS_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case ADD_COORDS_ERROR:
      return {
        ...state,
        error,
      }
    default:
      return state;
  }
}

export const addCoords = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_COORDS_REQUEST,
      isAuth: false
    });

    fetch(`${api}/api/add-coords`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(async(res) => {
      dispatch({
        type: ADD_COORDS_SUCCESS,
      })
    }).catch(err => {
      console.error(err)
    })
  };
}
