import { contactConstant } from "./contactConstant"

const initialState = {
  contacts: [],
  loading:false,
  singleContact:'',
}

const ContactReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case contactConstant.GET_CONTACT:
      return {
        ...state,
        contacts: action.payload,loading:true
      }
      case contactConstant.GET_SINGLE_CONTACT:
      return {
        ...state,
        singleContact: action.payload,loading:true
      }

    case contactConstant.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
      case contactConstant.REMOVE_SINGLE_CONTACT:
      return {
        ...state,singleContact:''
      }
      
      
    default:
      return state
  }
}

export default ContactReducer


