import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import AppHeader from "./home element/header";
import AppHero from "./home element/hero";
import AppAbout from "./home element/about";
import AppServices from "./home element/services";
import AppContact from "./home element/contact";
import AppFooter from "./home element/footer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const { currentUser } = useAuth() || {};
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  // Debugging: Log the current user
  useEffect(() => {
    console.log("Current User:", currentUser);

    if (currentUser) {
      setShowWelcomeModal(true);
    }
  }, [currentUser]);

  // Close the modal when "Close" is clicked
  const handleClose = () => setShowWelcomeModal(false);

  // Fallback message while loading
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Welcome Modal */}
      <Modal show={showWelcomeModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are logged in as{" "}
          <strong>{currentUser.displayName || currentUser.email}</strong>!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main Home Content */}
      <div className="home">
        <header id="header">
          <AppHeader />
        </header>
        <main>
          <AppHero />
          <AppAbout />
          <AppServices />
          <AppContact />
        </main>
        <footer id="footer">
          <AppFooter />
        </footer>
      </div>
    </div>
  );
};

export default Home;
