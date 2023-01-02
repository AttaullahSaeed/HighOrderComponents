import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Cookies from "js-cookie";
import { userLoginReducer } from "./components/reducer/authReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
});

const initialState = {
  loginUser: {
    userInfo: Cookies.get("token") ? Cookies.get("token") : null,
  },
};

const middlware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);
export default store;
