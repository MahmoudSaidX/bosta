import { useEffect } from "react";
import { useParams } from "react-router-dom";
import formatReadableDate from "../../utils/readableDate";
import useBostaShipmentTracking from "../../hooks/useBostaShipmentTracking";
import { useSelector } from "react-redux";
import { RootState } from "../../helpers/store";

const TrackingCard = () => {
  const { id } = useParams();
  const { fetchShipmentData } = useBostaShipmentTracking();

  useEffect(() => {
    if (id) {
      fetchShipmentData(id);
    }
  }, [id]);

  const trackData = useSelector(
    (state: RootState) => state.shipment.shipmentData
  );

  // Add null checks for date values
  const lastUpdateDate = trackData.CurrentStatus?.timestamp
    ? formatReadableDate(trackData.CurrentStatus.timestamp, { year: "numeric" })
    : "N/A";

  const promisedDate = trackData.PromisedDate
    ? formatReadableDate(trackData.PromisedDate, { year: "numeric" })
    : "N/A";

  return (
    <div className="mx-32 my-16">
      <div className="border-[1px] border-gray-200 rounded-t-md p-4 flex flex-row justify-between">
        <div className="flex flex-col">
          <span>رقم الشحنة {trackData.TrackingNumber}</span>
          <span>تم الغاء الشحنة</span>
        </div>

        <div className="flex flex-col">
          <span>اخر تحديث</span>
          <span>{lastUpdateDate}</span>
        </div>

        <div className="flex flex-col">
          <span>اسم التاجر</span>
          <span>{trackData.provider}</span>
        </div>

        <div className="flex flex-col">
          <span>موعد التسليم</span>
          <span>{promisedDate}</span>
        </div>
      </div>
      <div className="border-[1px] border-gray-200 rounded-b-md p-4 border-t-0">
        TrackingCard
      </div>
    </div>
  );
};

export default TrackingCard;
