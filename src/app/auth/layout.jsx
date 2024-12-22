import NavbarHome from "@/components/Ui/navbar-home";

import { Container, Row, Col, Image } from "react-bootstrap";

export default function AuthLayout({ children }) {
  return (
    <>
      <NavbarHome />
      <Container className="auth">
        <Row>
          <Col>
            <div className="auth-layout">
              <div className="auth-left">
                <Image
                  src="https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?t=st=1734836582~exp=1734840182~hmac=df28e5049f9a6f9262fc7679ba2288e7d175ead8c437ba87c1c2e7cb244bc544&w=996"
                  alt="logo"
                  width={400}
                  height={400}
                />
                <h2>Dokter Labs</h2>
              </div>
              <div className="auth-right">{children}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
