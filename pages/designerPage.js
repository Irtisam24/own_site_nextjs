import Head from "next/head";
import DescriptionBlock from "../components/common/descriptionBlock";
import Header from "../components/common/header";
import Sidebar from "../components/common/sideBar";
import Slider from "../components/common/slider";
import wordpressImageOne from "../public/images/work1.PNG";
import wordpressImageTwo from "../public/images/work2.PNG";
import wordpressImageThree from "../public/images/work3.PNG";
import wordpressImageFour from "../public/images/cap1.PNG";
import { Container } from "reactstrap";

export default function DesignerPage() {
  return (
    <>
      <Head>
        <title>Designer Page</title>
      </Head>
      <div>
        <Sidebar
          to="/developerPage"
          heading="Switch to Developer"
          darkBrown={true}
        />
      </div>
      <div className="bgCream">
        <Container>
          <Header darkBrown={true} />
        </Container>
        <div>
          <Container>
            <DescriptionBlock
              title="Graphics Designs"
              description="We have dedicated team of Wordpress developers who manage to meet client requirements with full functionalities and outstanding design"
              darkBrown={true}
            />
            <Slider
              darkBrown={true}
              images={[
                wordpressImageOne.src,
                wordpressImageTwo.src,
                wordpressImageThree.src,
                wordpressImageFour.src,
              ]}
            />
          </Container>
        </div>
      </div>
    </>
  );
}
