import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import from reducers
import {
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userResetPasswordReducer,
  userRegisterReducer
} from "./redux/reducers/userReducer";

import {
  courseListReducer,
  courseDeleteReducer,
  courseCreateReducer,
  courseViewReducer,
  courseEditReducer,
  courseDetailsReducer,
} from "./redux/reducers/courseReducer";

import {
  testimonialsListReducer,
} from "./redux/reducers/testimonialReducer";

const reducer = combineReducers({
  resgister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userProfileUpdate: userUpdateProfileReducer,
  userResetPassword: userResetPasswordReducer,
  courseList: courseListReducer,
  courseDelete: courseDeleteReducer,
  courseCreate: courseCreateReducer,
  courseView: courseViewReducer,
  courseEdit: courseEditReducer,
  courseDetails: courseDetailsReducer,
  testimonialList: testimonialsListReducer
});

const userLocalStorage  = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  userLogin: { userInfo: userLocalStorage  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
