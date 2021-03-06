import config from "../../config/app";
import AuthService from "../services/AuthService";

const { appName, api } = config;

export const moduleName = "auth";

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
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        error: false,
        user: payload
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error
      };
    default:
      return state;
  }
}

export const signIn = (user, navigation) => {
  return dispatch => {
    dispatch({
      type: SIGN_IN_REQUEST,
      isAuth: false
    });

    fetch(`${api}/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(async res => {
        if (res.status == "200") {
          const userData = await res.json();
          dispatch({
            type: SIGN_IN_SUCCESS,
            payload: userData
          });
          AuthService.authenticateUser(userData.result);
          navigation.navigate("HomeScreen");
        } else {
          dispatch({
            type: SIGN_IN_ERROR,
            error: true
          });
        }
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: SIGN_IN_ERROR,
          error: error
        });
      });
  };
};

export const authFetch = () => {
  return async dispatch => {
    dispatch({
      type: SIGN_IN_REQUEST
    });

    const user = await AuthService.getUser();
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: JSON.parse(user)
    });

    if (user === null) {
      dispatch({
        type: SIGN_IN_ERROR
      });
    }
  };
};
