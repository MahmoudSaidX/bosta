import { createSlice } from "@reduxjs/toolkit";

export interface TransitEvent {
  state: string;
  timestamp: string;
  hub?: string;
  exceptionCode?: string;
  reason?: string;
}

export interface ShipmentData {
  provider: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitEvent[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: {
    dayDate: string;
    dayName: string;
  }[];
}

interface ShipmentState {
  shipmentData: ShipmentData;
}

const initialState: ShipmentState = {
  shipmentData: {
    CreateDate: "2023-04-04T13:52:13.977Z",
    CurrentStatus: { state: "", timestamp: "2023-04-04T13:52:13.977Z" },
    isEditableShipment: false,
    nextWorkingDay: [],
    PromisedDate: "2023-04-04T13:52:13.977Z",
    provider: "",
    SupportPhoneNumbers: [],
    TrackingNumber: "",
    TrackingURL: "",
    TransitEvents: [],
  },
};

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    setShipmentData: (state, action) => {
      state.shipmentData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShipmentData } = shipmentSlice.actions;

export default shipmentSlice.reducer;
