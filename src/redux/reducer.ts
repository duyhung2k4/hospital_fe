import { combineReducers } from "@reduxjs/toolkit";
import { queryApi } from "./api/query";



export const rootReducer = combineReducers({
  [queryApi.reducerPath]: queryApi.reducer,
})