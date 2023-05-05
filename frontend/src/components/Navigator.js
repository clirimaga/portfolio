import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import "./components.css";

function Navigator() {
  const [navbar, setNavbar] = useState(false);
  const { t } = useTranslation();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav>
      <Navbar className={navbar ? "navbar active shadow" : "navbar shadow"} expand="lg">
        <Container>
          <Navbar.Brand href="/" className="skillsbar ps-2 pe-2">
            Ç.S
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <span>
                <Nav.Link href="#techskills" className="skillsbar">
                  {t("Navbar.1")}
                </Nav.Link>
              </span>
              <span>
                <Nav.Link href="#projects" className="skillsbar">
                  {t("Navbar.2")}
                </Nav.Link>
              </span>
              <span>
                <Nav.Link href="#contact" className="skillsbar">
                  {t("Navbar.3")}
                </Nav.Link>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Navigator;
