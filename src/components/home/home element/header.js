import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doSignOut } from '../../../firebase/auth';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppHeader() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <Navbar bg="light" expand="lg" className="fixed top-0 left-0 ">
      <Container>
        <Navbar.Brand href="#home" className="text-xl font-bold text-blue-600">
          Innovia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto space-x-4">
            <Nav.Link href="#home" className="hover:text-blue-600 transition-colors">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="hover:text-blue-600 transition-colors">
              About
            </Nav.Link>
            <Nav.Link href="#build-your-pc" className="hover:text-blue-600 transition-colors">
              Build Your PC
            </Nav.Link>
            <Nav.Link href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Nav.Link>
          </Nav>
          <div className="flex items-center space-x-4">
            {userLoggedIn ? (
              <Nav.Link
                as="button"
                onClick={() => {
                  doSignOut().then(() => {
                    navigate('/login');
                  });
                }}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors ml-6"
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors ml-4"
              >
                Login
              </Nav.Link>
            )}
          </div>
          <div className="flex items-center space-x-6">
            <Nav.Link
              as="button"
              onClick={()=>{
                navigate('/write')
              }}
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors ml-6"
            >
              Devtools
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
