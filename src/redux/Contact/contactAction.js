import { Api } from "../../AxiosConfig/Api"
import { contactConstant } from "./contactConstant"

export const fetch_contact =()=>async(dispatch) => {
      const response=await Api.get('/allproduct')
      dispatch({
        type: contactConstant.GET_CONTACT,
        payload:response.data
      })
  }

  export const add_contact =(value)=>async(dispatch) => {
    await Api.post('/addcontac',value)
    .then(()=>{
      dispatch({
        type: contactConstant.ADD_CONTACT,
        payload:value
      })
    })
    .catch((err)=>{
      console.log(err);
      dispatch({
        type: contactConstant.GET_CONTACT_FAILD,
      })
    })
    
     
      
   
    
      
     
    
}

export const get_contact_fail = () => {
  return {
    type: contactConstant.GET_CONTACT_FAILD,
  }
}

export const get_contact = value => {
  return {
    type: contactConstant.GET_CONTACT,
    payload: value
  }
}

export const selected_contact = value => {
  return {
    type: contactConstant.SELECTED_CONTACT,
    payload: value
  }
}