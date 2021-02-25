import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";
import Account from "./components/Account";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Home} />
          <PrivateRoute exact path="/" component={Account} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/navbar" component={Navbar} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
