import {
    TESTIMONIAL_LIST_REQUEST,
    TESTIMONIAL_LIST_SUCCESS,
    TESTIMONIAL_LIST_FAIL,
    TESTIMONIAL_CREATE_REQUEST,
    TESTIMONIAL_CREATE_SUCCESS,
    TESTIMONIAL_CREATE_FAIL,
    TESTIMONIAL_CREATE__REST,
  } from "../constens/testimonialConstens";
  
  import axios from "axios";
  export const getTestimonilasApi = () => async (dispatch) => {
    try {
      dispatch({
        type: TESTIMONIAL_LIST_REQUEST,
      });
      const response = await axios.get("https://fake-school-100-backend.onrender.com/api/testimonials");
      dispatch({
        type: TESTIMONIAL_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TESTIMONIAL_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const createTestimonialApi = (testimonial) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TESTIMONIAL_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      };
      const response = await axios.post("https://fake-school-100-backend.onrender.com/api/testimonials/", testimonial, config);
      dispatch({
        type: TESTIMONIAL_CREATE_SUCCESS,
        payload: response.data,
      });
  
      dispatch({
        type: TESTIMONIAL_CREATE__REST,
      });
    } catch (error) {
      dispatch({
        type: TESTIMONIAL_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  