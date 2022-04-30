import {combineReducers} from "redux";
import cartReducers from "./reducer";

const rootReducer = combineReducers({
    data: cartReducers
});

export default rootReducer;