import React from "react";

import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";

import "./NavBar.css";

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .then(() => {});
  };

  return (
    <>
      <Navbar  collapseOnSelect expand="lg" className="navbar__bg">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          <Link to="/home" className="navbar__link"><h3 className="text-light " >CovTrack19</h3></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-2">
          <Nav.Link className="ml-auto navText__color" href="">
               <Link style={{ color: "white" }} className="navbar__link" to="/home">Home</Link>
            </Nav.Link>
          <Nav.Link className="ml-auto navText__color" href="">
               <Link style={{ color: "white" }} className="navbar__link" to="/home/vaccination-details">Vaccination Details</Link>
            </Nav.Link>
            <Nav.Link className="ml-auto navText__color" href="">
               <Link style={{ color: "white" }} className="navbar__link" to="/home/covid-hospital-details">Covid hospital details</Link>
            </Nav.Link>
            <Nav.Link
              className="ml-auto navText__color 2"
              onClick={logoutUser}
              href="#features"
            >
              Logout
            </Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
