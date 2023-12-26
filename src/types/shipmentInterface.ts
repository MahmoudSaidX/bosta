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

export interface ShipmentState {
  shipmentData: ShipmentData;
}
