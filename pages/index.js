import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
//
import { onLoadAnim } from "../animations";
import { gsap } from "gsap";

export default function Home() {
  //
  const loadingRef = useRef();
  //
  return (
    <div>
      <Head>
        <title>Maca Acuña - Welcome</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <div className="landing">
        <div className="">
          <h1 className="font-logo text-4xl md:text-6xl text-center py-2">
            Maca Acuña
          </h1>
          <p className="text text-landing">
            Industrial designer who loves to speak through objects.
          </p>
        </div>
        <div className="py-2 flex justify-center">
          <Link href={"/work"}>
            <a className="text text-landing underline text-primary-200 hover:text-primary-300 transition-all">
              See my work >>
            </a>
          </Link>
        </div>
        <div className="w-full flex flex-col justify-between w-screen mx-auto responsive-landing relative">
          <img
            className="h-full w-full object-contain mx-auto opacity-0"
            src="https://maca-projects.s3-sa-east-1.amazonaws.com/banner-photo.png"
            onLoad={(e) => {
              gsap.to(loadingRef.current, { visibility: "hidden" });
              onLoadAnim(e.target);
            }}
          />
          <div className="loading text-gray-700" ref={loadingRef}>
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
