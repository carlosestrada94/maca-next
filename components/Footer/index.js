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
    return menu.map(({ title, ref }, index) => {
      return (
        <div
          className="p-2 font-primary hover:text-primary-300 transition-all"
          key={index}
        >
          <Link href={ref}>
            <a
              className={`${
                router.pathname.includes(ref) ? "menu-item-selected" : ""
              }`}
            >
              {title}
            </a>
          </Link>
        </div>
      );
    });
  };
  //
  const socialItem = (name, href, icon) => {
    return (
      <a href={href} target={"_blank"} rel={"noreferrer"} className="flex">
        <span className=" flex items-center w-10 h-10 sm:hidden">{icon}</span>
        <span className="hidden sm:inline">{name}</span>
      </a>
    );
  };
  //
  return (
    <div className="responsive-padding">
      {/*  Links*/}
      <div className="flex border-b-2 border-gray-600">
        <div className="text flex py-2 w-full justify-center sm:justify-start">
          <div className="pr-4 py-0.5 hover:text-primary-300 transition-all flex items-center">
            {socialItem(
              "Instagram",
              "https://www.instagram.com/macaaol_design/",
              <FaInstagram className="w-full h-full" />
            )}
          </div>
          <div className="py-0.5 px-4 sm:px-4 border-gray-600 sm:border-l-2 sm:border-r-2 hover:text-primary-300 transition-all">
            {socialItem(
              "Behance",
              "https://www.behance.net/mcao-19962f8e",
              <FaBehance className="w-full h-full" />
            )}
          </div>
          <div className=" p-1 pl-4 py-0.5 hover:text-primary-300 transition-all">
            {socialItem(
              "Email",
              "mailto: maca132738@gmail.com",
              <FaEnvelope className="w-full h-full" />
            )}
          </div>
        </div>
        <div className=" w-full justify-end hidden sm:flex uppercase">
          {menuRender()}
        </div>
      </div>
      {/*Footnote*/}
      <div className="text-center text py-8">
        <div>
          Website designed by <span className="font-logo">Maca Acuña</span>
        </div>
        <div>
          Built by{" "}
          <a
            href={"https://cees.dev"}
            target={"_blank"}
            className="hover:text-primary-300 transition-all underline"
          >
            Carlos Estrada
          </a>
        </div>
      </div>
    </div>
  );
}
