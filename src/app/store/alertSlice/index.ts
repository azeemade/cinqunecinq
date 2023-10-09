import { StateCreator } from "zustand";

export interface AlertState {
  alert: boolean;
  setAlert: (alert: boolean) => void;
}

export const createAlertSlice: StateCreator<AlertState> = (set) => ({
  alert: false,
  setAlert: (alert: boolean) => set({ alert: alert }),
});
