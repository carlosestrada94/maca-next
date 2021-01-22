import Link from "next/link";
import Header from "../../components/Header";
import Head from "next/head";
//Custom
import { client } from "../../sanityClient";
import Footer from "../../components/Footer";

export default function Work({ projects }) {
  //
  const thumbnailsRender = () => {
    if (projects) {
      return projects.map(({ title, endpoint, thumbnail }) => {
        return (
          <div className="bg-gray-500 h-72 w-11/12 max-w-screen-sm sm:w-full sm:h-44 md:h-52 xl:h-64 2xl:h-72 relative mx-auto">
            <Link href={`/work/project/${endpoint}`}>
              <a className="absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-0 hover:bg-opacity-70 text-gray-50 text-opacity-0 hover:text-opacity-70 transition-all flex justify-center items-center">
                <h3 className="text-center font-title text-base">{title}</h3>
              </a>
            </Link>
            <div className="h-full w-full">
              <img className="h-full w-full object-cover" src={thumbnail} />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-max gap-4 responsive-padding">
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
      "*[_type == 'project'] {title, 'endpoint': slug.current, 'thumbnail': media[0].asset->url}"
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
    revalidate: 120,
  };
}
