import React,{useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";


import "./NavBar.css";
import AvatarModal from "../avatarModal/AvatarModal";

function NavBar() {
  const [show,handleShow]=useState(false);


  const transitionNavBar=()=>{
    
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
      <Navbar   collapseOnSelect expand="lg"  className={`navbar__bg ${show &&"nav__black"}`}>

        <Navbar.Brand href="#home" style={{ color: "white",display:"flex",alignItems:"center" }}>
          <Link to="/home" className="navbar__link"><h3 className="text-light " >CovTrack19</h3></Link>
        </Navbar.Brand>
  
        <Navbar.Toggle className="navbar-toggler custom-toggler" aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse style={{color:"white"}}  id="responsive-navbar-nav">
      {/*  <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar4">
        <span class="navbar-toggler-icon"></span>
  </button>  */}
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
