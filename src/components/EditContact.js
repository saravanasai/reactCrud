import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const EditContact = () => {
    const {id}=useParams();

    const contact_List=useSelector(state=>state.contact.contacts)
    
   
    const editInfo=contact_List.filter(list=> {
        return list.id===Number(id)
    });
    
    const [ContactForm, setContactForm] = useState({
        name: editInfo[0].name,
        email: editInfo[0].email,
        phonenumber: editInfo[0].phonenumber
      })
    const handleUpdate=(e)=>{
        e.preventDefault()
        console.log(ContactForm);
    }

    return ( 
        <div className="container-fluid">
      <h4 className="text-center text-dark py-3 display-2">EDIT CONTACT INFO</h4>
        
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 p-5 mx-auto shadow">
              <form onSubmit={handleUpdate}>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Full name"
                    value={ContactForm.name}
                    onChange={e =>
                      setContactForm({ ...ContactForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={ContactForm.email}
                    onChange={e =>
                      setContactForm({ ...ContactForm, email: e.target.value })}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone"
                    value={ContactForm.phonenumber}
                    onChange={e =>
                      setContactForm({
                        ...ContactForm,
                        phonenumber: e.target.value
                      })}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="btn btn-block btn-warning"
                    type="submit"
                    value="UPDATE CONTACT"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default EditContact;