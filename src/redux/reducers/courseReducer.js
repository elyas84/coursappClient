import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DELETE_REQUEST,
  COURSE_DELETE_SUCCESS,
  COURSE_DELETE_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAIL,
  COURSE_CREATE__REST,
  COURSE_VIEW_REQUEST,
  COURSE_VIEW_SUCCESS,
  COURSE_VIEW_FAIL,
  COURSE_VIEW__REST,
  COURSE_EDIT_REQUEST,
  COURSE_EDIT_SUCCESS,
  COURSE_EDIT_FAIL,
  COURSE_EDIT__REST,
  COURSE_DETAILS_REQUEST,
  COURSE_DEATAILS_SUCCESS,
  COURSE_DETAILS_FAIL,
} from "../constens/courseConstens";

export const courseListReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        courses: [],
      };

    case COURSE_LIST_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
      };
    case COURSE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const courseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_DELETE_REQUEST:
      return {
        loading: true,
      };

    case COURSE_DELETE_SUCCESS:
      return {
        loading: false,
        DeleteSuccess: true,
      };
    case COURSE_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const courseCreateReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return {
        loading: true,
      };

    case COURSE_CREATE_SUCCESS:
      return {
        loading: false,
        table: action.payload,
        success: true,
      };
    case COURSE_CREATE__REST:
      return {
        loading: false,
        error: action.payload,
      };
    case COURSE_CREATE_FAIL:
      return { course: {}, success: false };
    default:
      return state;
  }
};

export const courseViewReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case COURSE_VIEW_REQUEST:
      return {
        loading: true,
      };

    case COURSE_VIEW_SUCCESS:
      return {
        loading: false,
        table: action.payload,
        success: true,
      };
    case COURSE_VIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case COURSE_VIEW__REST:
      return { course: {}, success: false };
    default:
      return state;
  }
};

export const courseEditReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case COURSE_EDIT_REQUEST:
      return {
        loading: true,
      };

    case COURSE_EDIT_SUCCESS:
      return {
        loading: false,
        course: action.payload,
        success: true,
      };
    case COURSE_EDIT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case COURSE_EDIT__REST:
      return { course: {}, success: false };
    default:
      return state;
  }
};

export const courseDetailsReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case COURSE_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case COURSE_DEATAILS_SUCCESS:
      return {
        loading: false,
        course: action.payload,
      };
    case COURSE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
