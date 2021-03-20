import React from 'react'
import '../index.css'
import CoronaLogo from '../images/corona.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar} from "react-bootstrap";

export default function Header(){
    return (
        <header>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home">
  <img
        src={CoronaLogo}
        width="80"
        height="80"
        className="coronalogo"
        alt="Corona logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link className= "text-dark font-weight-bold sizeTextNav" href="index.html">Acceuil</Nav.Link>
      <Nav.Link className= "text-dark font-weight-bold sizeTextNav" href="informations.html">Informations légales</Nav.Link>
      <Nav.Link className= "text-dark font-weight-bold sizeTextNav" href="faq.html">FAQ</Nav.Link>
      <Nav.Link className= "text-dark font-weight-bold sizeTextNav" eventKey={2} href="emergency.html">
      Contacts d'urgence
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</header>
    )
}