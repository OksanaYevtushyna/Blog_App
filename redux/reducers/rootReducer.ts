import { combineReducers } from "redux";
import mainReducer from "./main";


const rootReducer = combineReducers({
    main: mainReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer