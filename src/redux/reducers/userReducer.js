import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REG_REQUEST,
    USER_REG_SUCCESS,
    USER_REG_FAIL,
    USER_REG_REST,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_PROFILE_UPDATE_REQUEST,
    USER_PROFILE_UPDATE_SUCCESS,
    USER_PROFILE_UPDATE_FAIL,
    USER_PROFILE_UPDATE_REST,
    USER_REST_PASSWORD_REQUEST,
    USER_REST_PASSWORD_SUCCESS,
    USER_REST_PASSWORD_FAIL,
    USER_REST_PASSWORD_REST,
  } from "../constens/userConstens";
  
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REG_REQUEST:
        return {
          userInfo: {},
          loading: true,
          message:null,
        };
      case USER_REG_SUCCESS:
        return {
          loading: false,
          userInfo: action.payload,
          registerSuccess: true,
        
        };
      case USER_REG_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case USER_REG_REST:
        return {
          ...state,
          registerSuccess: false,
        };
      default:
        return state;
    }
  };

  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return {
          loading: true,
        };
  
      case USER_LOGIN_SUCCESS:
        return {
          loading: false,
          userInfo: action.payload,
          loginSuccess: true,
        };
  
      case USER_LOGIN_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case USER_LOGOUT:
        return {};
  
      default:
        return state;
    }
  };
  export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case USER_DETAILS_SUCCESS:
        return {
          loading: false,
  
          user: action.payload,
        };
  
      case USER_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_PROFILE_UPDATE_REQUEST:
        return {
          loading: true,
        };
  
      case USER_PROFILE_UPDATE_SUCCESS:
        return {
          loading: false,
          userInfo: action.payload,
          updateSuccess: true,
        };
      case USER_PROFILE_UPDATE_FAIL:
        return {
          loading: false,
          error: action.payload,
          updateSuccess: false,
        };
      case USER_PROFILE_UPDATE_REST:
        return {};
      default:
        return state;
    }
  };
  
  export const userResetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REST_PASSWORD_REQUEST:
        return {
          loading: true,
        };
  
      case USER_REST_PASSWORD_SUCCESS:
        return {
          loading: false,
          updateSuccess: true
        };
      case USER_REST_PASSWORD_FAIL:
        return {
          loading: false,
          error: action.payload,
          updateSuccess: false,
        };
      case USER_REST_PASSWORD_REST:
        return {};
      default:
        return state;
    }
  };