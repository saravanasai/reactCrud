import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetch_single_contact, remove_selected_contact } from "../redux/Contact/contactAction";

const EditContact = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
   
  const singleContactInfo=useSelector(state=>state.contact.singleContact);
  const Loading=useSelector(state=>state.contact.loading);
  useEffect(()=>{

      dispatch(fetch_single_contact(id))

    return function (){dispatch(remove_selected_contact())}

  },[id]);
  console.log(singleContactInfo);
  const [ContactForm, setContactForm] = useState({
    name: singleContactInfo.name,
    email:  singleContactInfo.email,
    phonenumber:  singleContactInfo.phonenumber
  })

  const handleUpdate = (e) => {
    e.preventDefault();
  };
   
  return (
    <div className="container-fluid">
      <h4 className="text-center text-dark py-3 display-2">
        EDIT CONTACT INFO
      </h4>
     {!Loading && (<><h3>Loading.....</h3></>)}
     {singleContactInfo && (<>
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
                    onChange={(e) =>
                      setContactForm({ ...ContactForm, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={ContactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...ContactForm, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone"
                    value={ContactForm.phonenumber}
                    onChange={(e) =>
                      setContactForm({
                        ...ContactForm,
                        phonenumber: e.target.value,
                      })
                    }
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
      </div></>)}
    </div>
  );
};

export default EditContact;
