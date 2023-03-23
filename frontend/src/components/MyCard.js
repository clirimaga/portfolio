import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./components.css";
import AOS from "aos";
import "aos/dist/aos.css";
function MyCard() {
  AOS.init();
  return (
    <div className="col-auto" data-aos="zoom-out-right">
      <Card className="mycard shadow">
        <Card.Img
          variant="top"
          src={
            "https://res.cloudinary.com/dffxhlnzz/image/upload/v1678879566/clirimlinkedin-removebg_vydjk5.png"
          }
          alt="clirim"
          className="cardimg"
        />
        <Card.Body className="d-flex flex-col justify-content-around">
          <a href="https://github.com/clirimaga" target="_blank">
            <Button className="links" title="Github">
              <BsGithub />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/clirimsadiku/" target="_blank">
            <Button className="links" title="LinkedIn">
              <BsLinkedin />
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
