// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./productSlice";

// export default configureStore({
//   reducer: {
//     products: productReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./productSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
  reducer: {
    products: persistedReducer,
  },
});

export default store;

export let persistor = persistStore(store);
