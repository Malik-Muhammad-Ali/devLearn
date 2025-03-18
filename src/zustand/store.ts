import { create, StoreApi } from "zustand";
import { userSlice, UserState } from "./slices/userSlice";

// Define Store State Type
type StoreState = UserState;

const useAppStore = create<StoreState>(
  (set, get, store: StoreApi<StoreState>) => {
    // Load user and token from localStorage
    let storedUser = null;
    try {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        storedUser = JSON.parse(userStr);
        // Ensure the user object has the required fields
        if (!storedUser._id) {
          console.error('Invalid user data in localStorage:', storedUser);
          storedUser = null;
          localStorage.removeItem("user");
        }
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
      localStorage.removeItem("user");
    }

    const storedToken = localStorage.getItem("token") || null;
    if (!storedToken) {
      storedUser = null;
      localStorage.removeItem("user");
    }

    // console.log('Initializing store with:', { storedUser, storedToken });

    return {
      ...userSlice(set, get, store),

      // Initialize Zustand state with stored user and token
      user: storedUser,
      token: storedToken,

      // Function to set user & token
      setUser: (user: any, token: string) => {
        // console.log('Setting user:', { user, token });
        if (!user || !user._id) {
          console.error('Invalid user data:', user);
          return;
        }
        if (!token) {
          console.error('No token provided');
          return;
        }
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
