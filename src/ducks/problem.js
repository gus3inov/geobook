import config from '../../config/app';
import AuthService from '../services/AuthService';

const {
  appName,
  api
} = config;

export const moduleName = 'problem';

export const ADD_PROBLEM_REQUEST = `${appName}/${moduleName}/ADD_PROBLEM_REQUEST`;
export const ADD_PROBLEM_SUCCESS = `${appName}/${moduleName}/ADD_PROBLEM_SUCCESS`;
export const ADD_PROBLEM_ERROR = `${appName}/${moduleName}/ADD_PROBLEM_ERROR`;

export const FETCH_PROBLEMS_REQUEST = `${appName}/${moduleName}/FETCH_PROBLEMS_REQUEST`;
export const FETCH_PROBLEMS_SUCCESS = `${appName}/${moduleName}/FETCH_PROBLEMS_SUCCESS`;
export const FETCH_PROBLEMS_ERROR = `${appName}/${moduleName}/FETCH_PROBLEMS_ERROR`;

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function problem(state = initialState, action) {
  const {
    type,
    payload,
    error,
    isAuth
  } = action;

  switch (type) {
    case ADD_PROBLEM_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADD_PROBLEM_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case ADD_PROBLEM_ERROR:
      return {
        ...state,
        error,
      }

    case FETCH_PROBLEMS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PROBLEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      }
    case FETCH_PROBLEMS_ERROR:
      return {
        ...state,
        error,
      }
    default:
      return state;
  }
}

export const addProblem = (data) => {
    return (dispatch) => {
      dispatch({
        type: ADD_PROBLEM_REQUEST,
        isAuth: false
      });
  
      fetch(`${api}/api/add-problem`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(async(res) => {
        dispatch({
          type: ADD_PROBLEM_SUCCESS,
        })
      }).catch(err => {
        console.error(err)
      })
    };
  }

export const fetchProblems = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PROBLEMS_REQUEST,
      isAuth: false
    });

    fetch(`${api}/api/problems`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(async(res) => {
      const response = await res.json()
      dispatch({
        type: FETCH_PROBLEMS_SUCCESS,
        payload: response.result
      })
    }).catch(error => {
      console.error(error)
      dispatch({
        type: FETCH_PROBLEMS_ERROR,
        error
      })
    })
  };
}