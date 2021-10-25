import { combineReducers } from "redux"
import ContactReducer from "./Contact/ContactReducer"

const Rootreducer = combineReducers({
  contact: ContactReducer
})

export default Rootreducer
