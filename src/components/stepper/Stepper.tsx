import useGetLang from "../../hooks/useGetLang";
import { translations } from "../../locales/translations";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaTruckMoving } from "@react-icons/all-files/fa/FaTruckMoving";
import { AiOutlineFileDone } from "@react-icons/all-files/ai/AiOutlineFileDone";
import { useSelector } from "react-redux";
import { RootState } from "../../helpers/store";

const Stepper = () => {
  const { lang } = useGetLang();

  const currentStatus = useSelector(
    (state: RootState) => state.shipment.shipmentData.CurrentStatus
  );
  return (
    <>
      {currentStatus.state === "CANCELLED" && (
        <div className="flex flex-col gap-4">
          <ol className="flex flex-row items-center gap-0 p-0 m-0">
            <li className="h-6 w-6 flex items-center justify-center rounded-full bg-red-500">
              <span className="text-white text-xs">
                <FaCheck />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-red-500"></li>
            <li className="h-6 w-6 flex justify-center items-center rounded-full bg-red-500">
              <span className="text-white text-xs">
                <FaCheck />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-red-500"></li>
            <li className="h-12 w-12 flex items-center justify-center rounded-full bg-red-500">
              <span className="text-white text-2xl">
                <FaTruckMoving />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-gray-200"></li>
            <li className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-200">
              <span className="text-white text-2xl">
                <AiOutlineFileDone />
              </span>
            </li>
          </ol>
          <ol className="flex items-center justify-between">
            <li>{translations[lang]["TICKET_CREATED"]}</li>
            <li>{translations[lang]["PACKAGE_RECEIVED"]}</li>
            <li>{translations[lang]["OUT_FOR_DELIVERY"]}</li>
            <li>{translations[lang]["DELIVERED"]}</li>
          </ol>
        </div>
      )}
      {currentStatus.state === "DELIVERED" && (
        <div className="flex flex-col gap-4">
          <ol className="flex flex-row items-center gap-0 p-0 m-0">
            <li className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500">
              <span className="text-white text-xs">
                <FaCheck />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-green-500"></li>
            <li className="h-6 w-6 flex justify-center items-center rounded-full bg-green-500">
              <span className="text-white text-xs">
                <FaCheck />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-green-500"></li>
            <li className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500">
              <span className="text-white text-2xl">
                <FaTruckMoving />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-green-500"></li>
            <li className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500">
              <span className="text-white text-2xl">
                <AiOutlineFileDone />
              </span>
            </li>
          </ol>
          <ol className="flex items-center justify-between">
            <li>{translations[lang]["TICKET_CREATED"]}</li>
            <li>{translations[lang]["PACKAGE_RECEIVED"]}</li>
            <li>{translations[lang]["OUT_FOR_DELIVERY"]}</li>
            <li>{translations[lang]["DELIVERED"]}</li>
          </ol>
        </div>
      )}
      {currentStatus.state === "DELIVERED_TO_SENDER" && (
        <div className="flex flex-col gap-4">
          <ol className="flex flex-row items-center gap-0 p-0 m-0">
            <li className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500">
              <span className="text-white text-xs">
                <FaCheck />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-green-500"></li>
            <li className="h-6 w-6 flex justify-center items-center rounded-full bg-green-500">
              <span className="text-white text-xs">
                <FaCheck />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-green-500"></li>
            <li className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500">
              <span className="text-white text-2xl">
                <FaTruckMoving />
              </span>
            </li>
            <li className="h-2 w-[30%] bg-gray-200"></li>
            <li className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-200">
              <span className="text-white text-2xl">
                <AiOutlineFileDone />
              </span>
            </li>
          </ol>
          <ol className="flex items-center justify-between">
            <li>{translations[lang]["TICKET_CREATED"]}</li>
            <li>{translations[lang]["PACKAGE_RECEIVED"]}</li>
            <li>{translations[lang]["OUT_FOR_DELIVERY"]}</li>
            <li>{translations[lang]["DELIVERED"]}</li>
          </ol>
        </div>
      )}
    </>
  );
};

export default Stepper;
