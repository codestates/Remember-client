import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AccidentState } from "./types/accident";

const persistConfig = {
  key: "root",
  storage,
};
const enhancedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  enhancedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type Root = ReturnType<typeof rootReducer>;

export default store;
