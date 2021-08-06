/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Tween } from "react-gsap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import CustomOutlinedButton from "../components/common/customOutlinedButton";
import contactUsBg from "../public/images/contactbg.png";

export default function ContactUsPage() {
  const [interestedinvalid, setinterestedinvalid] = useState(true);
  const [technologyinvalid, settechnologyinvalid] = useState(true);
  const [Emailvalid, setEmailvalid] = useState(true);
  const [Phonenumbervalid, setPhonenumbervalid] = useState(true);
  const [budgetvalid, setbudgetvalid] = useState(true);
  const [Aboutprojectvalid, setAboutprojectvalid] = useState(true);
  const [checkall, setcheckall] = useState(true);
  const [interestedin, setinterestedin] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Budget, setBudget] = useState("");
  const [Aboutproject, setAboutproject] = useState("");
  const [technologyin, settechnologyin] = useState([]);
  const [technologyinput, settechnologyinput] = useState("");
  const emailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const onchangefunction = (e) => {
    setinterestedin(e.target.value);
    if (e.target.value === "webdevelopment") {
      settechnologyin(["Reactjs", "NodeJs", "ExpressJS"]);
    } else if (e.target.value === "androiddevelopment") {
      settechnologyin(["Java", "React Native", "Flutter"]);
    } else if (e.target.value === "graphicdesigning") {
      settechnologyin(["Logo Design", "Video Editing", "Animation"]);
    }
  };

  const handleSubmit = () => {
    if (interestedin === "") {
      setinterestedinvalid(!interestedinvalid);
    } else {
      setinterestedinvalid(true);
    }

    if (technologyinput === "") {
      settechnologyinvalid(!technologyinvalid);
    } else {
      settechnologyinvalid(true);
    }

    if (Budget === "") {
      setbudgetvalid(!budgetvalid);
    } else {
      setbudgetvalid(true);
    }

    if (Aboutproject === "") {
      setAboutprojectvalid(!Aboutprojectvalid);
    } else {
      setAboutprojectvalid(true);
    }

    if (Email === "") {
      setEmailvalid(!Emailvalid);
    } else {
      setEmailvalid(true);
    }
    if (
      interestedinvalid === true ||
      technologyinvalid === true ||
      budgetvalid === true ||
      Aboutprojectvalid === true ||
      Emailvalid === true
    ) {
      setcheckall(!checkall);
    }
  };
  return (
    <div className="aboutus-section">
      <Tween from={{ x: 500, opacity: 0 }}>
        <div className="aboutus-sectionone">
          <h1 className="aboutus-heading">Fill Your</h1>
          <h1 className="aboutus-heading">Requirement</h1>
          <img
            className="requirement-img"
            src={contactUsBg.src}
            alt="contactUs.png"
          />
        </div>
      </Tween>
      <div className="aboutus-sectiontwo">
        <Tween from={{ x: -500, opacity: 0 }} delay={0.4}>
          <div>
            <Form>
              <FormGroup
                className={
                  !checkall
                    ? "mt-3 d-flex justify-content-center flex-column align-items-center"
                    : "mt-5 d-flex justify-content-center flex-column align-items-center"
                }
              >
                <Input
                  type="select"
                  name="selectintrest"
                  id="intrests"
                  className="rounded-3 border border-dark bg-dark text-muted w-75 p-1"
                  onChange={(e) => {
                    onchangefunction(e);
                  }}
                >
                  <option selected="selected">Interested In</option>
                  <option value="webdevelopment">Web Development</option>
                  <option value="androiddevelopment">
                    Android Development
                  </option>
                  <option value="graphicdesigning">Graphic Designing</option>
                </Input>
                {!interestedinvalid && (
                  <p className="mb-0 text-danger fw-bold">
                    Kindly Select your interest
                  </p>
                )}
              </FormGroup>
              <FormGroup className="mt-2 d-flex justify-content-center flex-column align-items-center">
                <Input
                  type="select"
                  name="selecttechnology"
                  id="technologies"
                  className="rounded-3 border border-dark bg-dark text-muted w-75 p-1"
                  onChange={(e) => {
                    settechnologyinput(e);
                  }}
                >
                  <option selected="selected">Technology</option>
                  {technologyin.map((technology, index) => {
                    return <option key={index}>{technology}</option>;
                  })}
                </Input>
                {!technologyinvalid && (
                  <p className="mb-0 text-danger fw-bold">
                    Kindly select technology
                  </p>
                )}
              </FormGroup>
              <FormGroup className="mt-2 d-flex justify-content-center flex-column align-items-center">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="rounded-3 border border-dark bg-dark text-white w-75 p-1 "
                  onChange={(e) => {
                    setEmail(e);
                  }}
                />
                {!Emailvalid && (
                  <p className="mb-0 text-danger fw-bold">
                    Kindly put a valid email
                  </p>
                )}
              </FormGroup>
              <FormGroup className="mt-2 d-flex  justify-content-center flex-column align-items-center">
                <input
                  type="tel"
                  id="number"
                  placeholder="Phone Number (optional)"
                  className="rounded-3 border border-dark bg-dark text-white w-75 p-1"
                  onChange={(e) => {
                    setPhonenumber(e);
                  }}
                />
              </FormGroup>
              <FormGroup className="mt-2 d-flex justify-content-center flex-column align-items-center">
                <input
                  type="number"
                  id="email"
                  placeholder="Budget"
                  className="rounded-3 border border-dark bg-dark text-white w-75 p-1"
                  onChange={(e) => {
                    setBudget(e);
                  }}
                />
                {!budgetvalid && (
                  <p className="mb-0 text-danger fw-bold">
                    Kindly state your budget
                  </p>
                )}
              </FormGroup>
              <FormGroup className="mt-2 d-flex justify-content-center flex-column align-items-center">
                <Input
                  type="textarea"
                  name="text"
                  rows={5}
                  placeholder="About Your Project"
                  className="rounded-3 w-75 border border-dark bg-dark text-white p-1"
                  onChange={(e) => {
                    setAboutproject(e);
                  }}
                />
                {!Aboutprojectvalid && (
                  <p className="mb-0 text-danger fw-bold">
                    Kindly tell us about your project
                  </p>
                )}
              </FormGroup>
              <div className="mt-5 mb-5">
                <CustomOutlinedButton
                  smallButton={true}
                  buttonType="darkRed"
                  onClick={handleSubmit}
                  buttonText="Submit"
                />
              </div>
            </Form>
          </div>
        </Tween>
      </div>
    </div>
  );
}
