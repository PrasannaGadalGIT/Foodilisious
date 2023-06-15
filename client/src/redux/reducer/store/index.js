import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from '../userSlice/index'
import logger from "redux-logger";



const reducer = combineReducers({
  user: userSlice
  
});

const store = configureStore({
  reducer,
  middleware : [logger] //runs in the middle execution of the program
});

export default store;
