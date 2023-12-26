/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setShipmentData } from "../helpers/features/shipmentSlice";
import { ShipmentData } from "../types/shipmentInterface";

interface UseBostaShipmentTracking {
  fetchShipmentData: (trackingNumber: string) => Promise<void>;
  loading: boolean;
  error: Error | null;
}

const useBostaShipmentTracking = (): UseBostaShipmentTracking => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchShipmentData = async (trackingNumber: string): Promise<void> => {
    setLoading(true);

    try {
      const response: AxiosResponse<ShipmentData> = await axios.get(
        `https://tracking.bosta.co/shipments/track/${trackingNumber}`
      );

      dispatch(setShipmentData(response.data));
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchShipmentData, loading, error };
};

export default useBostaShipmentTracking;
