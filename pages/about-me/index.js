import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div>
      <Head>
        <title>Maca Acuña - About me</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <Header />
      <div className="responsive-padding">
        <p className="w-full sm:w-3/5 mx-auto px-2 py-10 text-center font-paragraph">
          Hi! My name is María Camila Acuña. My friends call me Maca. I am an
          indsutrial/product designer.
          <br />
          &nbsp;
          <br />
          I am passionate about telling stories through design. I consider that
          those whom are not afraid to express their ideas, provide the boost
          for all the people to stand up and be heard.
          <br />
          &nbsp;
          <br />I enjoy projects that challenge my skills, my creativity, and
          provide the chance to learn, and to contribute.
        </p>
        <div className="relative">
          <p className="absolute top-1/3 w-2/3 text-xs px-6 italic font-paragraph">
            "Building a concept that communicates our ideas, and which we feel
            identified with, in something tangible, makes us smile at life."
          </p>
          <img
            className="pt-10 "
            src={
              "https://maca-projects.s3-sa-east-1.amazonaws.com/Foto+banner.jpg"
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
