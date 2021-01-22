import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
//Custom
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Eighty() {
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
            className={`p-2 hover:text-primary-300 transition-all ${
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
    <div>
      <Head>
        <title>Maca Acuña - Eighty</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <Header />
      <div className="responsive-padding">
        <div>{menuRender()}</div>
        <div className="py-4 text-6xl font-title font-extralight">
          On progress...
        </div>
      </div>
      <Footer />
    </div>
  );
}
