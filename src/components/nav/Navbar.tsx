import bostaImg from "/public/bosta.svg";
import bostaEn from "/public/bostaEn.svg";
import { translations } from "../../locales/translations";
import useGetLang from "../../hooks/useGetLang";

const Navbar = () => {
  const { lang, switchLang } = useGetLang();

  return (
    <nav className="flex flex-row items-center justify-around p-6 border border-b-1 border-b-gray-200">
      <a href="https://www.bosta.co" target="_blank">
        <img src={lang === "ar" ? bostaImg : bostaEn} alt="Bosta Logo" />
      </a>
      <div className="flex flex-row gap-12 text-gray-600 font-bold cursor-pointer">
        <span>{translations[lang].home}</span>
        <span>{translations[lang].pricing}</span>
        <span>{translations[lang].call}</span>
      </div>
      <div className="flex flex-row gap-6 text-gray-600 font-bold cursor-pointer">
        <span>{translations[lang].track}</span>
        <span>{translations[lang].logIn}</span>
        <button
          onClick={() => {
            switchLang();
          }}
          className="text-red-600"
        >
          {lang === "ar" ? "En" : "Ar"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
