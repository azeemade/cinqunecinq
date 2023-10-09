import { create } from "zustand";
import { createSearchSlice, SearchState } from "./searchSlice";
import { AlertState, createAlertSlice } from "./alertSlice";

export const useBoundStore = create<any>()((...a) => ({
  ...createSearchSlice(...a),
  ...createAlertSlice(...a),
}));
