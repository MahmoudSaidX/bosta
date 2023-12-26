import { useEffect, useState } from "react";
import { Language } from "../locales/translations";

interface GetLangHook {
  lang: Language;
  switchLang: () => void;
}

const useGetLang = (): GetLangHook => {
  const storedLang = window.localStorage.getItem("lang");
  const initialLang: Language = storedLang ? (storedLang as Language) : "en";
  const [lang, setLang] = useState<Language>(initialLang);

  useEffect(() => {
    document.body.dir = lang === "en" ? "ltr" : "rtl";
  }, [lang]);

  const switchLang = () => {
    const newLang: Language = lang === "en" ? "ar" : "en";
    window.localStorage.setItem("lang", newLang);
    window.localStorage.setItem("dir", newLang === "en" ? "ltr" : "rtl");
    setLang(newLang);
    window.location.reload();
  };

  return { lang, switchLang };
};

export default useGetLang;
