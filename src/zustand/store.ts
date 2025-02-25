import { create, StoreApi } from "zustand";
import { userSlice, UserState } from "./slices/userSlice";

// Define Store State Type
type StoreState = UserState;

const useAppStore = create<StoreState>(
  (set, get, store: StoreApi<StoreState>) => {
    // Load user and token from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    const storedToken = localStorage.getItem("token") || null;

    return {
      ...userSlice(set, get, store),

      // Initialize Zustand state with stored user and token
      user: storedUser,
      token: storedToken,

      // Function to set user & token
      setUser: (user: any, token: string) => {
        set({ user, token });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      },

      // Logout function
      logout: () => {
        set({ user: null, token: null });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      },
    };
  }
);

export default useAppStore;
