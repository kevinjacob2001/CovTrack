import React,{useEffect,useState} from "react";

import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";

import "./NavBar.css";
import AvatarModal from "../avatarModal/AvatarModal";

function NavBar() {
  const [show,handleShow]=useState(false);
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


  const transitionNavBar=()=>{
    console.log("hello")
    if(window.scrollY>100){
        handleShow(true);
    }
    else{
        handleShow(false);
    }
}


  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar)
    return ()=>window.removeEventListener("scroll",transitionNavBar)
},[])

  return (
    <>
      <Navbar  collapseOnSelect expand="lg"  className={`navbar__bg ${show &&"nav__black"}`}>

        <Navbar.Brand href="#home" style={{ color: "white",display:"flex",alignItems:"center" }}>
          <Link to="/home" className="navbar__link"><h3 className="text-light " >CovTrack19</h3></Link>
        </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-2" style={{display:"flex",alignItems:"center"}}>
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
              className="ml-auto"
            >
              <AvatarModal/>
            </Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
