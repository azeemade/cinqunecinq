import { create } from "zustand";
import { createSearchSlice, SearchState } from "./searchSlice";
import { AlertState, createAlertSlice } from "./alertSlice";
import { createArticleSlice } from "./articleSlice";

export const useBoundStore = create<any>()((...a) => ({
  ...createSearchSlice(...a),
  ...createAlertSlice(...a),
  ...createArticleSlice(...a),
}));
