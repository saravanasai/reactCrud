import { contactConstant } from "./contactConstant"

export const add_contact = value => {
  return {
    type: contactConstant.ADD_CONTACT,
    payload: value
  }
}
