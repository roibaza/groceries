import {combineReducers} from "redux";
import groceriesReducer from "./groceries.reducer";
import filtersReducer from "./filters.reducer";




const rootReducer = combineReducers({
    groceriesReducer,
    filtersReducer
})

export default rootReducer;
