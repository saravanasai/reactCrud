import "./App.css"
import { ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router"
import Home from "./components/Home"
import AddContact from "./components/AddContact"
import Contacts from "./components/contacts"
import EditContact from "./components/EditContact"

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/contact" component={Contacts} />
        <Route path="/add" component={AddContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </div>
  )
}

export default App
