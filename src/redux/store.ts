import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { queryApi } from "./api/query";
import { scheduleApi } from "./api/schedule";



const middleware = [
    queryApi.middleware,
    scheduleApi.middleware,
]

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch