import { combineReducers } from "redux";
import InitReducer from "./InitReducer";
import UserReducer from "./UserReducer";
import SpsReducer from "./SpsReducer";
import ServiceReducer from "./ServiceReducer";

const rootReducer = combineReducers({
  init: InitReducer,
  user: UserReducer,
  sps: SpsReducer,
  services: ServiceReducer,
});

export default rootReducer;
