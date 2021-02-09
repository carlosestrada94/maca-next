import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//Custom
import { menu } from "../../links/main";

export default function Header() {
  const router = useRouter();
  //
  const menuRender = () => {
    return menu.map(({ title, ref }, index) => {
      return (
        <Fragment key={index}>
          <Link href={ref}>
            <a
              className={`menu-item ${
                router.pathname.includes(ref) ? "menu-item-selected" : ""
              }`}
            >
              {title}
            </a>
          </Link>
        </Fragment>
      );
    });
  };

  return (
    <div>
      <h1 className="logo">
        <Link href={"/"}>
          <a>Maca Acuña</a>
        </Link>
      </h1>
      <div className="flex justify-center py-2">{menuRender()}</div>
    </div>
  );
}
