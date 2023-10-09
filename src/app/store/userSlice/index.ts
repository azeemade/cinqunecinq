import { StateCreator } from "zustand";
import { persist, StateStorage, createJSONStorage } from "zustand/middleware";

interface User {
  uuid: string | any;
  name: string;
}

interface UserState {
  user: User;
  setUser: (user: User) => void;
}

export const createUserSlice: StateCreator<UserState> = (set) => ({
  user: {
    uuid: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))?.uuid
      : null,
    name: "",
  },
  setUser: (user: User) => {
    if (!user?.uuid) {
      localStorage.setItem("user", JSON.stringify(user));
      set({ user });
    }
  },
});
