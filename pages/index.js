import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maca Acuña - Landing</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <main className="min-h-screen w-screen font-title flex flex-col justify-center">
        <div className="">
          <h1 className="font-logo text-4xl md:text-8xl text-center py-2">
            Maca Acuña
          </h1>
          <p className="font-title text-center text-sm md:text-base px-1 py-2 font-extralight">
            Industrial designer who loves to speak through objects.
          </p>
        </div>
        <div className="flex justify-center py-2">
          <div className="bg-primary-100 h-5 w-5 rounded-full mx-1" />
          <div className="bg-primary-200 h-5 w-5 rounded-full mx-1" />
          <div className="bg-primary-300 h-5 w-5 rounded-full mx-1" />
        </div>
        <div className="py-2 flex justify-center">
          <Link href={"/work"}>
            <a className="bg-primary-100 text-primary-300 text-sm md:text-base p-2 rounded-full hover:bg-primary-300 hover:text-primary-100 transition-all">
              See my work
            </a>
          </Link>
        </div>
        <div className="w-full flex flex-col justify-between">
          <img
            className="flex-grow h-80 w-full object-contain"
            src="https://maca-projects.s3-sa-east-1.amazonaws.com/landing-photo.png"
          />
        </div>
      </main>
    </div>
  );
}
