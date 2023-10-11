// import { StateCreator, create } from "zustand";
// import { persist, StateStorage, createJSONStorage } from "zustand/middleware";

// interface User {
//   uuid: string | any;
//   name: string;
// }

// interface UserState {
//   user: User;
//   setUser: (user: User) => void;
// }

// // const localUser = window.localStorage.getItem("user");
// const localUser =
//   typeof window !== "undefined" ? window.localStorage.getItem("user") : null;

// export const createUserSlice: StateCreator<UserState> = (set) => ({
//   user: {
//     uuid: localUser ? JSON.parse(localUser)?.uuid : null,
//     name: "",
//   },
//   setUser: (user: User) => {
//     if (!user?.uuid) {
//       window.localStorage.setItem("user", JSON.stringify(user));
//       set({ user });
//     }
//   },
// });

// export const createUserSlice = create<UserState>(
//   persist(
//     (set) => ({
//       user: {
//         uuid: localUser ? JSON.parse(localUser)?.uuid : null,
//         name: "",
//       },
//       setUser: (user: User) => {
//         if (!user?.uuid) {
//           set({ user });
//         }
//       },
//     }),
//     {
//       name: "user", // Storage key
//     }
//   )
// );

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  uuid: string | any;
  name: string;
}

interface UserState {
  user: User;
  setUser: (user: User) => void;
}

// const localUser =
//   typeof window !== "undefined" ? window.localStorage.getItem("user") : null;

export const createUserSlice = create(
  persist(
    (set) => ({
      user: {
        uuid: "", //localUser ? JSON.parse(localUser)?.uuid : null,
        name: "",
      },
      setUser: (user: User) => {
        if (!user?.uuid) {
          set({ user });
        }
      },
    }),
    {
      name: "user", // Storage key
    }
  )
);
