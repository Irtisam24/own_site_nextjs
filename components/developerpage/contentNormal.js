import { Button, Container } from "reactstrap";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

const ContentNormal = () => {
  return (
    <div className="whole-section">
      <Container>
        <div className="header-section">
          <div className="dpsection">
            <Button color="danger" className="custom-button">
              Start Now
            </Button>
            <Button color="info" className="custom-button">
              About Us
            </Button>
          </div>
          <div className="logo">
            <h1>Ii</h1>
          </div>
          <AllInclusiveIcon fontSize="large" className="icon" />
        </div>
        <div className="content-section">
          <div className="content-heading">
            <h1>Want a Website </h1>
          </div>
          <div className="content-description">
            <h5>
              {`It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).`}
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContentNormal;
