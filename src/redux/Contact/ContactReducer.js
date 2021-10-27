import { contactConstant } from "./contactConstant"

const initialState = {
  contacts: [],
  fetchStatus:false
}

const ContactReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case contactConstant.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
      case contactConstant.GET_CONTACT:
      return {
        ...state,
        contacts: action.payload,fetchStatus:true
      }
      case contactConstant.GET_CONTACT_FAILD:
      return {
        ...state,
        fetchStatus: true
      }

    default:
      return state
  }
}

export default ContactReducer


