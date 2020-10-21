import { createStore, applyMiddleware } from "redux";
import {createWrapper} from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import rootReducer, { AppStateType } from "./reducers/rootReducer";
import { ActionTypes } from "./actions/main";


const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

  const reducer = (state: AppStateType, action: ActionTypes) => {
    return rootReducer(state, action)
  }

  const initStore = () => {
    return createStore(reducer, bindMiddleware([thunk]))
  }
const wrapper = createWrapper(initStore)
export default wrapper