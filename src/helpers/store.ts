import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../helpers/features/counterSlice";
import shipmentReducer from "../helpers/features/shipmentSlice";

export const store = configureStore({
  reducer: {
    shipment: shipmentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
