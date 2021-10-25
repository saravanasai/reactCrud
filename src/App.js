import "./App.css"
import { ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router"
import Home from "./components/Home"
import AddContact from "./components/AddContact"

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddContact} />
      </Switch>
    </div>
  )
}

export default App
