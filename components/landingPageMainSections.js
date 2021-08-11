import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import Link from "next/link";
import CustomOutlinedButton from "./common/customOutlinedButton";
import React from "react";
import { Reveal, Tween } from "react-gsap";

const LandingPageNextMainSection = () => {
  return (
    <div className="section">
      <Container fluid={true}>
        <Row>
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="nopadding animated-col-delay animate__animated animate__fadeInUp "
          >
            <div className="leftside">
              <div className="dInLeft">D</div>
              <div className="eInLeft">E</div>
              <div className="sInLeft">S</div>
              <div className="iInLeft">I</div>
              <div className="gInLeft">G</div>
              <div className="nInLeft">N</div>
              <div className="sLastInLeft">S</div>

              <div className="graphicdesigner">
                <p className="pfont">Our</p>
                <h1 className="headingfont"> Designs</h1>
                <p className="descriptionfont">We Design the impossible</p>
                <Link href="/designerPage">
                  <CustomOutlinedButton buttonText="DISCOVER MORE" />
                </Link>
              </div>
            </div>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="nopadding animated-col-delay animate__animated animate__fadeInDown"
          >
            <div className="rightside">
              <div className="pInRight">P</div>
              <div className="rInRight">R</div>
              <div className="oInRight">O</div>
              <div className="jInRight">J</div>
              <div className="eInRight">E</div>
              <div className="cInRight">C</div>
              <div className="tInRight">T</div>
              <div className="sInRight">S</div>

              <div className="webdeveloper">
                <p className="pfont">Our</p>
                <h1 className="headingfont"> Projects</h1>
                <h4 className="descriptionfontBrown">
                  We Build the Impossible
                </h4>
              </div>
              <Link href="/developerPage">
                <CustomOutlinedButton
                  buttonText="DISCOVER MODE"
                  buttonType="darkRed"
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
