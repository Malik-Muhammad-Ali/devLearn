import { StateCreator } from "zustand";
import api from "../../services/api";

export interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  signup: (
    data: any
  ) => Promise<{ status: string; user: any } | { status: string; user: null }>;
}

export const userSlice: StateCreator<UserState> = (set, get, store) => ({
  user: null,
  signup: async (data) => {
    console.log(data);
    try {
      const response = await api.post("/user/signup", {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
      });
      return { status: "success", user: response.data };
    } catch (error: any) {
      console.log(error.response.status);
      if (error.response.status === 400) {
        return { status: "already exists", user: null };
      }
      return { status: "failed", user: null };
    }
  },
});
