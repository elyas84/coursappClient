import {
    TESTIMONIAL_LIST_REQUEST,
    TESTIMONIAL_LIST_SUCCESS,
    TESTIMONIAL_LIST_FAIL,
    TESTIMONIAL_DELETE_REQUEST,
    TESTIMONIAL_DELETE_SUCCESS,
    TESTIMONIAL_DELETE_FAIL,
    TESTIMONIAL_CREATE_REQUEST,
    TESTIMONIAL_CREATE_SUCCESS,
    TESTIMONIAL_CREATE_FAIL,
    TESTIMONIAL_CREATE__REST,
    TESTIMONIAL_VIEW_REQUEST,
    TESTIMONIAL_VIEW_SUCCESS,
    TESTIMONIAL_VIEW_FAIL,
    TESTIMONIAL_VIEW__REST,
    TESTIMONIAL_EDIT_REQUEST,
    TESTIMONIAL_EDIT_SUCCESS,
    TESTIMONIAL_EDIT_FAIL,
    TESTIMONIAL_EDIT__REST,
    TESTIMONIAL_DETAILS_REQUEST,
    TESTIMONIAL_DEATAILS_SUCCESS,
    TESTIMONIAL_DETAILS_FAIL,
  } from "../constens/testimonialConstens";

  export const testimonialsListReducer = (state = { testimonials: [] }, action) => {
    switch (action.type) {
      case TESTIMONIAL_LIST_REQUEST:
        return {
          ...state,
          loading: true,
          testimonials: [],
        };
  
      case TESTIMONIAL_LIST_SUCCESS:
        return {
          loading: false,
          testimonials: action.payload,
        };
      case TESTIMONIAL_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const testimonialDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case TESTIMONIAL_DELETE_REQUEST:
        return {
          loading: true,
        };
  
      case TESTIMONIAL_DELETE_SUCCESS:
        return {
          loading: false,
          DeleteSuccess: true,
        };
      case TESTIMONIAL_DELETE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const testmonialCreateReducer = (state = { testimonial: {} }, action) => {
    switch (action.type) {
      case TESTIMONIAL_CREATE_REQUEST:
        return {
          loading: true,
        };
  
      case TESTIMONIAL_CREATE_SUCCESS:
        return {
          loading: false,
          testimonial: action.payload,
          success: true,
        };
      case TESTIMONIAL_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case TESTIMONIAL_CREATE__REST:
        return { testimonial: {}, success: false };
      default:
        return state;
    }
  };
  
  export const testimonialViewReducer = (state = { testimonial: {} }, action) => {
    switch (action.type) {
      case TESTIMONIAL_VIEW_REQUEST:
        return {
          loading: true,
        };
  
      case TESTIMONIAL_VIEW_SUCCESS:
        return {
          loading: false,
          table: action.payload,
          success: true,
        };
      case TESTIMONIAL_VIEW_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case TESTIMONIAL_VIEW__REST:
        return { testimonial: {}, success: false };
      default:
        return state;
    }
  };
  
  export const testimonialEditReducer = (state = { testimonial: {} }, action) => {
    switch (action.type) {
      case TESTIMONIAL_EDIT_REQUEST:
        return {
          loading: true,
        };
  
      case TESTIMONIAL_EDIT_SUCCESS:
        return {
          loading: false,
          testimonial: action.payload,
          success: true,
        };
      case TESTIMONIAL_EDIT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case TESTIMONIAL_EDIT__REST:
        return { testimonial: {}, success: false };
      default:
        return state;
    }
  };
  
  export const testimonialDetailsReducer = (state = { testimonial: {} }, action) => {
    switch (action.type) {
      case TESTIMONIAL_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
  
      case TESTIMONIAL_DEATAILS_SUCCESS:
        return {
          loading: false,
          testimonial: action.payload,
        };
      case TESTIMONIAL_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };