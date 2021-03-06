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

export default function DeveloperPage() {
  return (
    <>
      <Head>
        <title>Developer Page</title>
      </Head>
      <div>
        <Sidebar to="designerPage" heading="Switch to Designer" />
      </div>
      <div className="bgDarkBrown">
        <Container>
          <Header />
        </Container>
        <div>
          <Container>
            <DescriptionBlock
              title="Wordpress Developer"
              description="We have dedicated team of Wordpress developers who manage to meet client requirements with full functionalities and outstanding design"
              darkBrown={false}
            />
            <Slider
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
