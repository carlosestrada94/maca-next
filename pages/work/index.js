import Link from "next/link";
import { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Head from "next/head";
import { gsap } from "gsap";
//Custom
import { client } from "../../sanityClient";
import Footer from "../../components/Footer";
import { onLoadAnim } from "../../animations";

export default function Work({ projects }) {
  //
  const thumbsContainerRef = useRef();
  //
  useEffect(() => {
    //
    const thumbnails = thumbsContainerRef.current.querySelectorAll(
      ".project-thumbnail"
    );
    //
    gsap
      .timeline()
      .to(thumbsContainerRef.current, { opacity: 1 })
      .from(thumbnails, { opacity: 0, stagger: 0.2 });
  }, []);
  //
  const thumbnailsRender = () => {
    if (projects) {
      return projects.map(({ title, endpoint, thumbnail }, index) => {
        return (
          <div
            className="project-thumbnail rounded overflow-hidden"
            key={index}
          >
            <Link href={`/work/project/${endpoint}`}>
              <a className="project-thumbnail-cover">
                <h3 className="text font-primary">{title}</h3>
              </a>
            </Link>
            <div className="h-full w-full">
              <img
                className="h-full w-full object-cover"
                src={thumbnail}
                alt={`Project ${title} thumbnail`}
                // onLoad={(e) => onLoadAnim(e.target)}
              />
            </div>
          </div>
        );
      });
    }
  };
  //
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Head>
        <title>Maca Acuña - Work</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <Header />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 auto-rows-max gap-4 responsive-padding opacity-0"
        ref={thumbsContainerRef}
      >
        {thumbnailsRender()}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  //
  let projects;
  //
  try {
    const response = await client.fetch(
      "*[_type == 'project'] {title, 'endpoint': slug.current, 'thumbnail': thumbnail.asset->url}"
    );
    console.log(response);
    projects = response;
  } catch (e) {
    console.error(e);
  }
  //
  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}
