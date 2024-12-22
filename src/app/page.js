import NavbarHome from "@/components/Ui/navbar-home";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <Container fluid className="homepage-container">
        <Row className="align-items-center homepage-content">
          <Col md={20} className="text-section">
            <div className="content-wrapper">
              <h1>
                The Best <span>Medical Services</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque, at rutrum nulla
                dictum. Ut ac ligula sapien. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec malesuada lorem maximus
                mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.
              </p>
              <Button variant="primary" className="read-more-btn">
                Read More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
