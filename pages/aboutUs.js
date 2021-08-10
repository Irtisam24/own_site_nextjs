import { Button, Col, Container, Row } from "reactstrap";
import Header from "../components/common/header";
import workimg from "../public/images/working.png";
import { offset } from "@popperjs/core";
import CustomOutlinedButton from "../components/common/customOutlinedButton";
import Link from "next/link";
import { Reveal, Tween } from "react-gsap";
/* eslint-disable @next/next/no-img-element */
export default function AboutUs() {
  return (
    <>
      <div className="aboutusreal1-section">
        <Container>
          <Header />
        </Container>
        <Container fluid>
          <Tween from={{ x: -200, opacity: 0 }} stagger={0.6} delay={1}>
            <div className="aboutusreal-heading">
              <h1 className="aboutusreal-headingtext">About</h1>
              <h1 className="aboutusreal-headingtext">Insightful Ideas</h1>
            </div>
            <div className="aboutusreal-description">
              <p className="aboutusreal-description-p1">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est la sint occaecati sint occaecati sint
                occaecati sint occaecati.
              </p>
              <p className="aboutusreal-description-p2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est la sint occaecati sint occaecati sint
                occaecati sint occaecati.
              </p>
            </div>
          </Tween>
        </Container>
      </div>
      <Reveal repeat>
        <div className="aboutusreal2-section hideScrollBar">
          <Tween from={{ y: 200, opacity: 0 }}>
            <div className="aboutusreal2-header">
              <Container fluid>
                <div className="aboutus2-video">
                  <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/eeRumeyplIw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </Container>
            </div>
          </Tween>
          <Container>
            <Row>
              <Col md="4">
                <Tween from={{ y: 200, opacity: 0 }} delay={0.2}>
                  <img src={workimg.src} alt="" className="working-img" />
                </Tween>
              </Col>
              <Col
                md={{ size: 4, offset: 1 }}
                className="d-flex align-items-center justify-content-center"
              >
              <div className='contactButton'>

                <Link href="/contactUs">
                  <CustomOutlinedButton buttonText="Contact Us" smallButton />
                </Link>
              </div>
              </Col>
              <Col md="3">
                <Tween from={{ y: 200, opacity: 0 }} delay={0.6}>
                  <h5 className="our-procedure-heading">OUR PROCEDURE</h5>
                  <p className="our-procedure-paragraph">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                </Tween>
              </Col>
            </Row>
          </Container>
        </div>
      </Reveal>
      <div className="faq-section">
        <Container fluid>
          <Reveal repeat>
            <div className="faq-heading">
              <Tween from={{ x: -200, opacity: 0 }}>
                <h1 className="faq-heading-text">FREQUENTLY ASKED QUESTIONS</h1>
              </Tween>
            </div>
            <div className="qa-section">
              <div className="question-answer">
                <Tween from={{ x: -200, opacity: 0 }} stagger={0.6} delay={0.4}>
                  <p className="question">
                    Q What is the time frame for a webiste development
                  </p>
                  <p className="answer">
                    A. The time framecan only be given whwn all the
                    functionalities and pre meetings has been done
                  </p>
                </Tween>
              </div>
              <div className="question-answer">
                <Tween from={{ x: -200, opacity: 0 }} stagger={0.6} delay={1.4}>
                  <p className="question">
                    Q What is the time frame for a webiste development
                  </p>
                  <p className="answer">
                    A. The time framecan only be given whwn all the
                    functionalities and pre meetings has been done
                  </p>
                </Tween>
              </div>
              <div className="question-answer">
                <Tween from={{ x: -200, opacity: 0 }} stagger={0.6} delay={2.6}>
                  <p className="question">
                    Q What is the time frame for a webiste development
                  </p>
                  <p className="answer">
                    A. The time framecan only be given whwn all the
                    functionalities and pre meetings has been done
                  </p>
                </Tween>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
