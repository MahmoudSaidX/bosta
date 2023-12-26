import { useSelector } from "react-redux";
import { RootState } from "../../helpers/store";

import formatReadableDate from "../../utils/readableDate";
import { TransitEvent } from "../../types/shipmentInterface";
import { translations } from "../../locales/translations";
import useGetLang from "../../hooks/useGetLang";

const ShipmentDetailes = () => {
  const datax = useSelector((state: RootState) => state.shipment.shipmentData);

  const { lang } = useGetLang();

  return (
    <div className="w-2/3">
      <h3 className="my-4">{translations[lang].ShipmentDetails}</h3>
      <table className="rounded-md bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">{translations[lang].branch}</th>
            <th className="py-2 px-4 border-b">{translations[lang].date}</th>
            <th className="py-2 px-4 border-b">{translations[lang].time}</th>
            <th className="py-2 px-4 border-b">
              {translations[lang].detailes}
            </th>
          </tr>
        </thead>
        <tbody>
          {datax.TransitEvents.map((item: TransitEvent, id: number) => {
            return (
              <tr key={id}>
                <td className="py-2 px-4 border-b">
                  {translations[lang][item?.hub || "N/A"]}
                </td>
                <td className="py-2 px-4 border-b">
                  {item.timestamp
                    ? formatReadableDate(
                        item.timestamp,
                        {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        },
                        lang === "ar" ? "ar-EG" : "en-US"
                      )
                    : "N/A"}
                </td>
                <td className="py-2 px-4 border-b">
                  {item.timestamp
                    ? formatReadableDate(
                        item.timestamp,
                        {
                          hour: "numeric",
                          minute: "numeric",
                        },
                        lang === "ar" ? "ar-EG" : "en-US"
                      )
                    : "N/A"}
                </td>
                <td className="py-2 px-4 border-b">
                  {translations[lang][item.state]}
                  <br />
                  <span className="text-red-500">
                    {translations[lang][item?.reason || "N/A"]}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentDetailes;
