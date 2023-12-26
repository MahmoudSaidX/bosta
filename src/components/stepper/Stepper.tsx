import useGetLang from "../../hooks/useGetLang";
import { translations } from "../../locales/translations";

const Stepper = () => {
  const { lang } = useGetLang();
  return (
    <ol className="flex flex-row items-center gap-0 p-0 m-0">
      <li className="h-6 w-6 rounded-full bg-red-500 relative">
        <span className="absolute top-8 right-0 w-52">
          {translations[lang]["TICKET_CREATED"]}
        </span>
      </li>
      <li className="h-2 w-[30%] bg-red-500"></li>
      <li className="h-6 w-6 rounded-full bg-red-500 relative">
        <span className="absolute top-8 right-[-16px] w-52">
          {translations[lang]["PACKAGE_RECEIVED"]}
        </span>
      </li>
      <li className="h-2 w-[30%] bg-red-500"></li>
      <li className="h-6 w-6 rounded-full bg-red-500 relative">
        <span className="absolute top-8 right-[-16px] w-52">
          {translations[lang]["OUT_FOR_DELIVERY"]}
        </span>
      </li>
      <li className="h-2 w-[30%] bg-red-500"></li>
      <li className="h-6 w-6 rounded-full bg-red-500 relative">
        <span className="absolute top-8 right-[-16px] w-52">
          {translations[lang]["DELIVERED"]}
        </span>
      </li>
    </ol>
  );
};

export default Stepper;
