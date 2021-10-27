import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetch_contact } from "../redux/Contact/contactAction";

const Contacts = () => {

  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contact.contacts);
  useEffect(() => { 
    dispatch(fetch_contact())
  }, [dispatch]);

  return (
    <div className="container mt-5">
        <div className="row mb-5">
            <div className="col-md-12 d-flex justify-content-end">
              <Link to="/" className="btn btn-sm btn-primary mx-2 px-2" >HOME</Link>
              <Link to="/add" className="btn btn-sm btn-dark mx-2 px-2" >ADD CONTACT</Link>
            </div>
        </div>
      <div className="row">
        <div className="card shadow p-5">
          <table className="table ">
            <thead className="mt-3 py-3">
              <th>so</th>
              <th>name</th>
              <th>email</th>
              <th>phonenumber</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody className="py-3">
              {contactList &&
                contactList.map(({ name, email, phonenumber,id:liId }, id) => {
                  return (
                    <tr key={id} className="mt-2">
                      <td>{id + 1}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{phonenumber}</td>
                      <td>
                        <Link
                          to={`/edit/${liId}`}
                          className="btn btn-sm btn-warning"
                        >
                          EDIT
                        </Link>
                      </td>
                      <td>
                        <buton id={liId} className="btn btn-sm btn-danger">
                          DELETE
                        </buton>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
