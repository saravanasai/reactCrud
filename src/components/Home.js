import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container mt-5 mx-auto">
      <div className="row">
        <div className="col-md-2 offset-md-10">
          <Link to="/add" class="btn btn-primary">
            Add Contact
          </Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col col-md-12">
          <div className="conatiner">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, alias dolorum ab aperiam nostrum voluptates quos eum
              eos doloribus ullam debitis saepe beatae rem aut assumenda
              delectus odio veniam inventore?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
