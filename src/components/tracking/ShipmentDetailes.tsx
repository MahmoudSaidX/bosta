import { useSelector } from "react-redux";
import { RootState } from "../../helpers/store";
import { TransitEvent } from "../../helpers/features/shipmentSlice";
import formatReadableDate from "../../utils/readableDate";

const ShipmentDetailes = () => {
  const datax = useSelector((state: RootState) => state.shipment.shipmentData);

  return (
    <div className="w-2/3">
      <h3 className="my-4">تفاصيل الشحنة</h3>
      <table className="rounded-md bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">الفرع</th>
            <th className="py-2 px-4 border-b">التاريخ</th>
            <th className="py-2 px-4 border-b">الوقت</th>
            <th className="py-2 px-4 border-b">تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {datax.TransitEvents.map((item: TransitEvent, id: number) => {
            return (
              <tr key={id}>
                <td className="py-2 px-4 border-b">{item.hub}</td>
                <td className="py-2 px-4 border-b">
                  {item.timestamp
                    ? formatReadableDate(item.timestamp, {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })
                    : "N/A"}
                </td>
                <td className="py-2 px-4 border-b">
                  {item.timestamp
                    ? formatReadableDate(item.timestamp, {
                        hour: "numeric",
                        minute: "numeric",
                      })
                    : "N/A"}
                </td>
                <td className="py-2 px-4 border-b">{item.reason}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentDetailes;
