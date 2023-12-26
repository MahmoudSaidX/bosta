import Navbar from "./nav/Navbar";
import DeliverydAdress from "./tracking/DeliverydAdress";
import ShipmentDetailes from "./tracking/ShipmentDetailes";
import TrackingCard from "./tracking/TrackingCard";

const Tracker = () => {
  return (
    <main>
      <Navbar />
      <TrackingCard />
      <div className="mx-32 flex flex-row items-start justify-between">
        <ShipmentDetailes />
        <DeliverydAdress />
      </div>
    </main>
  );
};

export default Tracker;
