import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Components/NotFound";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import VaccinationDetails from "./Pages/VaccinationDetails/VaccinationDetails";
import CovidHospitalDetails from "./Pages/CovidHospitalDetails/CovidHospitalDetails";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log("hello");
    auth.onAuthStateChanged((authUser) => {
      //console.log("user is", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
        history.push("/home");
      } else {
        //user is logged out
        dispatch(logout());
        history.push("/");
      }
    });
  }, [dispatch, history]);

  return (
    <Router>
      {user ? (
        <>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/home/vaccination-details">
              <VaccinationDetails/>
            </Route>
            <Route exact path="/home/covid-hospital-details">
              <CovidHospitalDetails/>
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </>
      ) : (
        <>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
