import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Head>
        <title>Maca Acuña - About me</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <Header />
      <div className="responsive-padding ">
        <p className="w-full sm:w-3/5 mx-auto px-10 text-center font-paragraph max-w-screen-sm">
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
        <div className="relative flex ">
          <img
            className="pt-10 w-full sm:w-4/5 max-w-screen-sm mx-auto"
            src={
              "https://maca-projects.s3-sa-east-1.amazonaws.com/maca-photo.jpeg"
            }
          />
        </div>
        <div className="text-center pt-10 font-paragraph">
          <p>Thank you for visiting my portfolio.</p>
          <p className="font-bold font-paragraph py-4">Let´s talk!</p>
          <p className="font-paragraph">
            Contact me through my social media or by mail (links are down
            below).
          </p>
          <p className="font-paragraph"></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
