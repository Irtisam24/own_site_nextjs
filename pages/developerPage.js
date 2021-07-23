import Head from "next/head";
import Sidebar from "../components/common/sideBar";
import ContentNormal from "../components/developerpage/contentNormal";

export default function DeveloperPage() {
  return (
    <>
      <Head>
        <title>Developer Page</title>
      </Head>
      <div>
        <Sidebar />
      </div>

      <ContentNormal />
    </>
  );
}
