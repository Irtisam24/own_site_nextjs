import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import Link from "next/link";
import CustomOutlinedButton from "./common/customOutlinedButton";

const LandingPageNextMainSection = () => {
  return (
    <div className="section">
      <Container fluid={true}>
        <Row>
          <Col
            xs="6"
            className="nopadding animated-col-delay animate__animated animate__fadeInUp "
          >
            <div className="leftside">
              <div className="graphicdesigner">
                <p className="pfont">I AM</p>
                <h1 className="headingfont"> GRAPHIC DESIGNER</h1>
                <h4 className="descriptionfont">
                  I want to build the impossible
                </h4>
                <CustomOutlinedButton
                  buttonText="DISCOVER MORE"
                  onClick={() => {
                    console.log("hit");
                  }}
                  buttonType="darkRed"
                />
              </div>
            </div>
          </Col>
          <Col
            xs="6"
            className="nopadding animated-col-delay animate__animated animate__fadeInDown"
          >
            <div className="rightside">
              <div className="webdeveloper">
                <p className="pfont">I AM</p>
                <h1 className="headingfont"> WEB DEVELOPER</h1>
                <h4 className="descriptionfont">
                  I want to build the impossible
                </h4>
              </div>
                <Link href="/developerPage">
                  <CustomOutlinedButton
                    buttonText="DISCOVER MODE"
                    onClick={() => {
                      console.log("hit");
                    }}
                  />
                </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPageNextMainSection;
