import Head from "next/head";
import { Fragment } from "react";
import Header from "../../../components/Header";
//Custom
import { client } from "../../../sanityClient";
import Footer from "../../../components/Footer";
import { onLoadAnim } from "../../../animations";

export default function Project({ project }) {
  //
  const projectRender = () => {
    if (project) {
      return (
        <Fragment>
          <Head>
            <title>{`Maca Acuña - ${project.title}`}</title>
            <link rel="icon" type={"image/png"} href="/favicon.png" />
          </Head>
          <Header />
          <div className="responsive-padding">
            <h2 className=" text-right px-2 text-5xl md:text-6xl font-title">
              {project.title}
            </h2>
            <p className="text px-2 sm:px-0 py-10 text-justify">
              {project.description}
            </p>
            <div>
              {project.images.map((src) => {
                return (
                  <div className="py-2">
                    <img
                      className="opacity-0"
                      src={src}
                      alt={`${project.title} project image`}
                      onLoad={(e) => onLoadAnim(e.target)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Fragment>
      );
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      {projectRender()}
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  //
  let paths;
  //
  try {
    const response = await client.fetch(
      "*[_type == 'project'] {'endpoint': slug.current}"
    );
    //
    console.log(response);
    //
    paths = response.map((project) => ({ params: { slug: project.endpoint } }));
  } catch (e) {
    console.error(e);
  }
  //
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  //
  let project;
  //
  try {
    const response = await client.fetch(
      `*[_type == 'project' && slug.current match '${params.slug}'] {title, description, 'images': media[].asset->url}`
    );
    //
    console.log(response);
    //
    project = response[0];
  } catch (e) {
    console.error(e);
  }
  //
  return {
    props: {
      project,
    },
    revalidate: 60,
  };
}
