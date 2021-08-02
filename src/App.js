import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./resets.css";
import styles from "./App.module.css";

import { Login, SignUp, ResetPassword, Dashboard } from "./components/index";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/password" exact component={ResetPassword} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
