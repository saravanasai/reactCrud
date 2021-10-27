import { combineReducers } from "redux"
import ContactReducer from "./Contact/ContactReducer"
import UpdateContactReducer from "./Contact/UpdateContactReducer"

const Rootreducer = combineReducers({
  contact: ContactReducer,
  selectedContact:UpdateContactReducer
})

export default Rootreducer
