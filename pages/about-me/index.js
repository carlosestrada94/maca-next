import Head from "next/head";
//
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { onLoadAnim } from "../../animations";

export default function About() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Head>
        <title>Maca Acuña - About me</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <Header />
      <div className="responsive-padding">
        <p className="text text-center max-w-screen-sm mx-auto">
          Hi! My name is María Camila Acuña. My friends call me Maca. I am an
          industrial/product designer.
          <br />
          &nbsp;
          <br />
          I am passionate about telling stories through design. I consider that
          those who are not afraid to express their ideas, provide the boost for
          all the people to stand up and be heard.
          <br />
          &nbsp;
          <br />I enjoy projects that challenge my skills, my creativity, and
          provide the chance to learn, and to contribute.
        </p>
        <div className="relative flex">
          <img
            className="h-full w-full pt-10 max-w-screen-md mx-auto object-contain"
            style={{ opacity: 0 }}
            src={
              "https://maca-projects.s3-sa-east-1.amazonaws.com/maca-photo.jpeg"
            }
            onLoad={(e) => onLoadAnim(e.target)}
          />
        </div>
        <div className="text text-center pt-10 text-center max-w-screen-sm mx-auto">
          <p>Thank you for visiting my portfolio.</p>
          <p className="py-4 font-bold">Let´s talk!</p>
          <p>
            Contact me through my social media or by mail (links are down
            below).
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
