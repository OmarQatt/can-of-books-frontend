import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Login from './Auth/Login.js'
import Logout from './Auth/Logout.js'
import Profile from './Auth/Profile.js'
import App from './App.js'
class Header extends React.Component {
  render() {
    return (
<BrowserRouter>
      <Navbar bg="dark" variant="dark">

      <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
            <Nav.Link href="#link"><Login/><Logout/></Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
    <Routes>
    <Route exact path="/Home" element={<App />} />
                    <Route exact path="/profile" element={<Profile />} />
                    
                </Routes>
    </BrowserRouter>


    )
  }
}

export default Header;
