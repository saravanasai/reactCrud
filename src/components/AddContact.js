import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { add_contact } from "../redux/Contact/contactAction"

const AddContact = () => {
  const dispatch = useDispatch()
  const contactList = useSelector(state => state.contact.contacts)
  console.log(contactList)
  const [ContactForm, setContactForm] = useState({
    name: "",
    email: "",
    phonenumber: ""
  })
  const handleSubmit = e => {
    e.preventDefault()
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ContactForm)
    }
    fetch("http://127.0.0.1:8000/api/addcontact", requestOptions)
      .then(res => {
        if (res.ok) {
          res.json()
        }
      })
      .then(data => {
        dispatch(add_contact(ContactForm))
        toast.success("CONACT ADDED SUCCESS FULLY")
        e.target.reset()
      })
  }
  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
      <div className="row">
        <div className="col-md-6">
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
                    value="Add Student"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow p-5">
            <table className="table ">
              <thead className="thead-dark">
                <th>so</th>
                <th>name</th>
                <th>email</th>
                <th>phonenumber</th>
              </thead>
              <tbody>
                {contactList.map(({ name, email, phonenumber }, id) => {
                  return (
                    <tr>
                      <td>
                        {id + 1}
                      </td>
                      <td>
                        {name}
                      </td>
                      <td>
                        {email}
                      </td>
                      <td>
                        {phonenumber}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContact
