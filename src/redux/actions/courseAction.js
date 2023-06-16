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
  
  import axios from "axios";
  export const getCourseApi = () => async (dispatch) => {
      //test
    try {
      dispatch({
        type: COURSE_LIST_REQUEST,
      });
      const response = await axios.get("https://fake-school-100-backend.onrender.com/api/curriculums");
      dispatch({
        type: COURSE_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const createCourseApi = (course) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COURSE_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      };
      const response = await axios.post("https://fake-school-100-backend.onrender.com/api/curriculums", course, config);
      dispatch({
        type: COURSE_CREATE_SUCCESS,
        payload: response.data,
      });
  
      dispatch({
        type: COURSE_CREATE__REST,
      });
    } catch (error) {
      dispatch({
        type: COURSE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const viewCourseApi = (course) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COURSE_VIEW_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfo.token,
        },
      };
      const response = await axios.put("https://fake-school-100-backend.onrender.com/api/curriculums/" + course, config);
  
      dispatch({
        type: COURSE_VIEW_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_VIEW_FAIL,
  
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const deleteCouseApi = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COURSE_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      };
      await axios.delete("https://fake-school-100-backend.onrender.com/api/curriculums/" + id, config);
  
      dispatch({
        type: COURSE_DELETE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: COURSE_DELETE_FAIL,
  
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const editCourseApi = (course) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COURSE_EDIT_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfo.token,
        },
      };
      const response = await axios.put("https://fake-school-100-backend.onrender.com/api/curriclums/" + course, config);
  
      dispatch({
        type: COURSE_EDIT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_EDIT_FAIL,
  
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const getCourseDetailApi = (course) => async (dispatch) => {
    try {
      dispatch({
        type: COURSE_DETAILS_REQUEST,
      });
      const response = await axios.get("https://fake-school-100-backend.onrender.com/api/curriclums/" + course);
  
      dispatch({
        type: COURSE_DEATAILS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_DETAILS_FAIL,
  
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
