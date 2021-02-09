import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
//Custom
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { links } from "./links";

export default function Eighty() {
  //
  const router = useRouter();
  //
  const menuRender = () => {
    return links.map(({ title, ref }) => {
      return (
        <Link href={ref}>
          <a
            className={`p-2 hover:text-primary-300 transition-all font-primary uppercase ${
              router.pathname.includes(ref) ? "font-bold text-primary-300" : ""
            }`}
          >
            {title}
          </a>
        </Link>
      );
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Head>
        <title>Maca Acuña - Eighty</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <Header />
      <div className="responsive-padding ">
        <div className=" pb-3 flex justify-center">{menuRender()}</div>
        <div className="py-4 text text-center animate-pulse">
          In progress...
        </div>
      </div>
      <Footer />
    </div>
  );
}
