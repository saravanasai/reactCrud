import { applyMiddleware, createStore,compose } from "redux"
import thunk from "redux-thunk"
import Rootreducer from "./Rootreducer"

const store = createStore(
  Rootreducer,compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
export default store
