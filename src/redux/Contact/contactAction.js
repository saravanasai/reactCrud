import { Api } from "../../AxiosConfig/Api"
import { contactConstant } from "./contactConstant"

export const fetch_contact =()=>async(dispatch) => {
      const response=await Api.get('/allproduct')
      dispatch({
        type: contactConstant.GET_CONTACT,
        payload:response.data
      })
  }

export const fetch_single_contact =(id)=>async(dispatch) => {
    const response=await Api.get(`/singleContact/${id}`)
    dispatch({
      type: contactConstant.GET_SINGLE_CONTACT,
      payload:response.data
    })
}

  export const add_contact =(value)=>async(dispatch) => {
    await Api.post('/addcontact',value)
    .then(()=>{
      dispatch({
        type: contactConstant.ADD_CONTACT,
        payload:value
      })
    })    
    
}

export const remove_selected_contact=()=>{
    
  return{
    type:contactConstant.REMOVE_SINGLE_CONTACT
    }
}