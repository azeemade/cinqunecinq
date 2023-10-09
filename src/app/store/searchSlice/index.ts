import { StateCreator } from "zustand";

export interface SearchState {
  search: string;
  setSearch: (search: string) => void;
}

export const createSearchSlice: StateCreator<SearchState> = (set) => ({
  search: "",
  setSearch: (search: string) => set({ search: search }),
});
