import {  useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { toast } from "react-toastify"
import { add_contact } from "../redux/Contact/contactAction"

const AddContact = () => {
  

  const navigation=useHistory()
  const dispatch = useDispatch()
  const [ContactForm, setContactForm] = useState({
    name: "",
    email: "",
    phonenumber: ""
  })

  

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(add_contact(ContactForm))
      toast.success("CONACT ADDED SUCCESS FULLY")
        e.target.reset()
        navigation.push('/contact')
  }


    
  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
     
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 p-5 mx-auto shadow">
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Full name"
                    onChange={e =>
                      setContactForm({ ...ContactForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    onChange={e =>
                      setContactForm({ ...ContactForm, email: e.target.value })}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone"
                    onChange={e =>
                      setContactForm({
                        ...ContactForm,
                        phonenumber: e.target.value
                      })}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="btn btn-block btn-success"
                    type="submit"
                    value="Add contact"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContact
