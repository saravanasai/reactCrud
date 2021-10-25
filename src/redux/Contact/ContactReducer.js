import { contactConstant } from "./contactConstant"

const initialState = {
  contacts: []
}

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactConstant.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }

    default:
      return state
  }
}

export default ContactReducer
