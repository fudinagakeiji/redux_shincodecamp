import { combineReducers } from "redux";
import couterReducer from "./counter";
import isLoginReducer from "./isLogin";

// まとめておく。
const allReducers = combineReducers({
  couter: couterReducer,
  isLogin: isLoginReducer,
});
export default allReducers;
