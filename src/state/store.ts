import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

// ReturnTypes gets the return type of a function
export type RootState = ReturnType<typeof store.getState>; // This is the type of the state of the store
export type AppDispatch = typeof store.dispatch; // This is the type of the dispatch function