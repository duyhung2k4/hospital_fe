import { combineReducers } from "@reduxjs/toolkit";
import { queryApi } from "./api/query";
import { scheduleApi } from "./api/schedule";



export const rootReducer = combineReducers({
  [queryApi.reducerPath]: queryApi.reducer,
  [scheduleApi.reducerPath]: scheduleApi.reducer,
})