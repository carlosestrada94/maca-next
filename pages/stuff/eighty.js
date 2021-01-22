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
            className={`p-2 hover:text-primary-300 transition-all font-title ${
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
        <div className="py-4 text-base font-title font-extralight bg-yellow-200 text-center">
          In progress...
        </div>
      </div>
      <Footer />
    </div>
  );
}
