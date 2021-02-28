import React from "react";

import { useDispatch } from "react-redux";

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
      <Navbar collapseOnSelect expand="lg" className="navbar__bg">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          CovTrack19
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link
              className="ml-auto navText__color"
              onClick={logoutUser}
              href="#features"
            >
              Logout
            </Nav.Link>
            <Nav.Link className="ml-auto navText__color" href="#pricing">
              Pricing
            </Nav.Link>
            <NavDropdown
              className="ml-auto"
              style={{ color: "white" }}
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
