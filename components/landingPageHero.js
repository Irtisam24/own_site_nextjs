import { Tween } from "react-gsap";
import { Button } from "reactstrap";
const LandingpageHero = () => {
  return (
    <div className="bgHero">
      <div className="section">
        <Tween from={{ y: "300px", opacity: 0 }} stagger={0.3}>
          <h1 className="header">Insightful Ideas</h1>
          <p className="description">Bringing You the Best IT Solutions</p>
          <div className="outlinedYellowGoldenButton">Watch</div>
        </Tween>
      </div>
    </div>
  );
};

export default LandingpageHero;
