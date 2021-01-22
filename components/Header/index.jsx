import Link from "next/link";
import { useRouter } from "next/router";
//Custom
import { menu } from "../../menu";

export default function Header() {
  const router = useRouter();
  //
  const menuRender = () => {
    return menu.map(({ title, ref }) => {
      return (
        <Link href={ref}>
          <a
            className={
              router.pathname.includes(ref) ? "menu menu-selected" : "menu"
            }
          >
            {title}
          </a>
        </Link>
      );
    });
  };

  return (
    <div>
      <h1 className="font-logo text-center text-5xl md:text-6xl py-12">
        <Link href={"/"}>
          <a>Maca Acuña</a>
        </Link>
      </h1>
      <div className="font-title flex justify-center py-2">{menuRender()}</div>
    </div>
  );
}
