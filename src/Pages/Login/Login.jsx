import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase";
import { login, logout } from "../../features/userSlice";

import Google from "./google.png";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
            emailId: result.user.email,
          })
        );
        history.push("/home");
      })
      .catch(() => {
        console.log("INVALID");
      });
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 className="mt-5 text-light">
          <b>CovTrack19</b>
        </h1>
        <p className="text-light mt-4">An End-to-end COVID-19 stats platform</p>
      </div>
      <Button className="login__btn" onClick={signIn}>
        <img width="30px" alt="error" className="mr-3" src={Google} />
        Continue with Google
      </Button>

      <div className="footer-container">
        <div className="vertical-center">
          <p className="footer__text text-center text-light">
            Proudly from India, for the Globe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
