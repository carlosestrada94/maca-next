import Link from "next/link";
import { useRouter } from "next/router";
import { FaInstagram, FaBehance, FaEnvelope } from "react-icons/fa";
//Custom
import { menu } from "../../menu";

export default function Footer() {
  //
  const router = useRouter();
  //
  const menuRender = () => {
    return menu.map(({ title, ref }) => {
      return (
        <div className="p-2 font-title hover:text-primary-300 transition-all">
          <Link href={ref}>
            <a className={router.pathname.includes(ref) ? "menu-selected" : ""}>
              {title}
            </a>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="responsive-padding ">
      {/*  Links*/}
      <div className="flex border-b-2 border-gray-600">
        <div className="flex py-2 w-full justify-center sm:justify-start">
          <div className=" pr-4 py-0.5 hover:text-primary-300 transition-all flex items-center">
            <a
              href={"https://www.instagram.com/macaaol_design/"}
              className="flex"
            >
              <span className=" flex items-center w-10 h-10 sm:hidden">
                <FaInstagram className="w-full h-full" />
              </span>
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
          <div className="py-0.5 px-4 sm:px-4 border-gray-600 sm:border-l-2 sm:border-r-2 hover:text-primary-300 transition-all">
            <a href={"https://www.behance.net/mcao-19962f8e"} className="flex">
              <span className=" flex items-center w-10 h-10 sm:hidden">
                <FaBehance className="w-full h-full" />
              </span>
              <span className="hidden sm:inline">Behance</span>
            </a>
          </div>
          <div className=" p-1 pl-4 py-0.5 hover:text-primary-300 transition-all">
            <a href={"mailto: maca132738@gmail.com"}>
              <span className=" flex items-center w-10 h-10 sm:hidden">
                <FaEnvelope className="w-full h-full" />
              </span>
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
        <div className=" w-full justify-end hidden sm:flex uppercase">
          {menuRender()}
        </div>
      </div>
      {/*Footnote*/}
      <div className="text-center font-paragraph text-xs py-8">
        <div>
          Website designed by <span className="font-logo">Maca Acuña</span>
        </div>
        <div>
          Built by{" "}
          <a
            href={"https://cees.dev"}
            target={"_blank"}
            className="hover:text-primary-300 transition-all"
          >
            Carlos Estrada
          </a>
        </div>
        <div>Powered by Next.js and Sanity.io</div>
      </div>
    </div>
  );
}
