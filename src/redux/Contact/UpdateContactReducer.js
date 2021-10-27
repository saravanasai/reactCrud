import { contactConstant } from "./contactConstant"

const initialState = {
  SelectedContacts: []
}

const UpdateContactReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case contactConstant.SELECTED_CONTACT:
      return {
        ...state,
        SelectedContacts:action.payload
      }

    default:
      return state
  }
}

export default UpdateContactReducer


