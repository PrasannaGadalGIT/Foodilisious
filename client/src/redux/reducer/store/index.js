import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from '../userSlice/index'



const reducer = combineReducers({
  user: userSlice
  
});

const store = configureStore({
  reducer
});

export default store;
