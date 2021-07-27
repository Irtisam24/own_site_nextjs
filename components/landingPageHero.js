import { Tween } from "react-gsap";
import Image from "next/image";
import mainLogo from "../public/images/mainLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import WaterWave from "react-water-wave";
const LandingpageHero = () => {
  return (
    <div className="bgHero">
      <div className="sectionHero">
        <Image
          src={mainLogo}
          width={250}
          height={250}
          layout="intrinsic"
          className="animated-col-delay animate__animated animate__fadeInUp"
          alt="Main Logo.png"
        />
        <Tween from={{ y: "300px", opacity: 0 }} stagger={0.3}>
          <h1 className="header">
            Insightful <span className="outlinedHeading">Ideas</span>
          </h1>
          <p className="descriptionText">Turning Ideas into realities.</p>
          <p className="smallText">Scroll</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="animated-col-delay animate__animated animate__fadeInUp animate__delay-2s customIcon"
            size="2x"
          />
        </Tween>
      </div>
    </div>
  );
};

export default LandingpageHero;
