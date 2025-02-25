import { create, StoreApi } from "zustand";
import { userSlice, UserState } from "./slices/userSlice";

// Define Store State Type
type StoreState = UserState;

const useAppStore = create<StoreState>(
  (set, get, store: StoreApi<StoreState>) => ({
    ...userSlice(set, get, store),
  })
);

export default useAppStore;
