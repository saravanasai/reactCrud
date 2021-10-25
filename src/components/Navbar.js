import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark ">
      <Link className="navbar-brand text-white text-center" to="/">
        <h4 className="p-2"> Contact App</h4>
      </Link>
    </nav>
  )
}

export default Navbar
