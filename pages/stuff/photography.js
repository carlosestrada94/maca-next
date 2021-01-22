import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
//Custom
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client } from "../../sanityClient";

export default function Photography({ photos }) {
  const menu = [
    { title: "Photography", ref: "/stuff/photography" },
    { title: "Eighty", ref: "/stuff/eighty" },
  ];
  //
  const router = useRouter();
  //
  const menuRender = () => {
    return menu.map(({ title, ref }) => {
      return (
        <Link href={ref}>
          <a
            className={`p-2 hover:text-primary-300 transition-all font-title uppercase ${
              router.pathname.includes(ref) ? "font-bold text-primary-300" : ""
            }`}
          >
            {title}
          </a>
        </Link>
      );
    });
  };
  //
  const [isFullActive, setIsFullActive] = useState(false);
  const [selectedPic, setSelectedPic] = useState("#");
  //
  const fullPictureRender = () => {
    return (
      <div
        className={`fixed top-0 md:py-12 md:px-12 left-0 h-screen w-screen bg-gray-800 bg-opacity-60 flex justify-center ${
          isFullActive ? "block" : "hidden"
        }`}
        onClick={() => {
          setIsFullActive(false);
        }}
      >
        <div className="bg-gray-900 relative">
          <img
            src={selectedPic.photoSrc}
            alt={selectedPic.caption}
            className="h-full w-full object-contain"
          />
          <h2 className="absolute bottom-10 bg-gray-900 bg-opacity-70 text-gray-50 px-2 text-base font-paragraph">
            {selectedPic.caption}
          </h2>
        </div>
      </div>
    );
  };
  //
  const galleryRender = () => {
    if (photos) {
      return photos.map(({ caption, photoSrc }) => {
        return (
          <div className="h-70 sm:h-32 md:h-28 lg:24">
            <img
              src={photoSrc}
              alt={caption}
              className="h-full w-full object-cover cursor-pointer"
              onClick={() => {
                setSelectedPic({ photoSrc, caption });
                setIsFullActive(true);
              }}
            />
          </div>
        );
      });
    }
  };
  //
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Head>
        <title>Maca Acuña - Photography</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <Header />
      <div className="responsive-padding">
        <div className="pb-3 flex justify-center">{menuRender()}</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 auto-rows-auto gap-2 py-1">
          {galleryRender()}
        </div>
      </div>
      {fullPictureRender()}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  //
  let photos;
  //
  try {
    const response = await client.fetch(
      "*[_type == 'gallery']{caption, 'photoSrc': photo.asset->url}"
    );
    //
    console.log(response);
    //
    photos = response;
  } catch (e) {
    console.error(e);
  }
  //
  return {
    props: {
      photos,
    },
    revalidate: 60,
  };
}
