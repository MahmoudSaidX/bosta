import { useEffect } from "react";
import { useParams } from "react-router-dom";
import formatReadableDate from "../../utils/readableDate";
import useBostaShipmentTracking from "../../hooks/useBostaShipmentTracking";
import { useSelector } from "react-redux";
import { RootState } from "../../helpers/store";
import useGetLang from "../../hooks/useGetLang";
import { translations } from "../../locales/translations";
import Stepper from "../stepper/Stepper";

const TrackingCard = () => {
  const { id } = useParams();
  const { fetchShipmentData } = useBostaShipmentTracking();
  const { lang } = useGetLang();

  useEffect(() => {
    if (id) {
      fetchShipmentData(id);
    }
  }, [id]);

  const trackData = useSelector(
    (state: RootState) => state.shipment.shipmentData
  );

  const lastUpdateDate = trackData.CurrentStatus?.timestamp
    ? formatReadableDate(
        trackData.CurrentStatus.timestamp,
        { year: "numeric" },
        lang === "ar" ? "ar-EG" : "en-US"
      )
    : "N/A";

  const promisedDate = trackData.PromisedDate
    ? formatReadableDate(
        trackData.PromisedDate,
        { year: "numeric" },
        lang === "ar" ? "ar-EG" : "en-US"
      )
    : "N/A";

  return (
    <div className="mx-32 my-16">
      <div className="border-[1px] border-gray-200 rounded-t-md p-4 flex flex-row justify-between">
        <div className="flex flex-col">
          <span>
            {translations[lang].deliveryNumber + " " + trackData.TrackingNumber}
          </span>
          <span>{translations[lang].shipmentCanceled}</span>
        </div>

        <div className="flex flex-col">
          <span>{translations[lang].lastUpdate}</span>
          <span>{lastUpdateDate}</span>
        </div>

        <div className="flex flex-col">
          <span>{translations[lang].merchantName}</span>
          <span>{trackData.provider}</span>
        </div>

        <div className="flex flex-col">
          <span>{translations[lang].deliveryTime}</span>
          <span>{promisedDate}</span>
        </div>
      </div>
      <div className="border-[1px] mx-auto border-gray-200 rounded-b-md p-4 border-t-0 pb-14">
        <Stepper />
      </div>
    </div>
  );
};

export default TrackingCard;
