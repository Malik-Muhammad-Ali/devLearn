import { StateCreator } from "zustand";
import api from "../../services/api";

export interface UserState {
  user: {
    _id: string;
    name: string;
    email: string;
    username: string;
    profilePic: string;
    stats: {
      passed: number;
      failed: number;
      total: number;
    };
  } | null;
  token: string | null;
  setUser: (user: any, token: string) => void;
  signup: (
    data: any
  ) => Promise<{ status: string; user: any } | { status: string; user: null }>;
  signin: (
    data: any
  ) => Promise<{ status: string; user: any } | { status: string; user: null }>;
  updateUser: (
    data: any,
    token: any
  ) => Promise<
    { status: string; user: any } | { status: string; message: string }
  >;
  logout: () => void;
}

export const userSlice: StateCreator<UserState> = (set, get) => ({
  user: null,
  token: null,
  setUser: (user: any, token: string) => {
    set({ user, token });
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  },
  signup: async (data: any) => {
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
  signin: async (data: any) => {
    try {
      const response = await api.post("/user/signin", {
        email: data.email,
        password: data.password,
      });
      // Store user & token
      get().setUser(response.data.user, response.data.token);
      localStorage.setItem("token", response.data.token);
      return { status: "success", user: response.data };
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 400) {
        return { status: "not found", user: null };
      }
      return { status: "failed", user: null };
    }
  },
  updateUser: async (data: any, token: string) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("username", data.username);
      if (data.previousPassword) {
        formData.append("previousPassword", data.previousPassword);
      }
      if (data.password) {
        formData.append("password", data.password);
      }
      if (data.profilePic) {
        formData.append("profilePic", data.profilePic);
      }

      const response = await api.put("/user/update-profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      get().setUser(response.data.user, token);
      return { status: "success", user: response.data.user };
    } catch (error: any) {
      console.error("Update Error:", error);
      if (
        error.response.status === 400 &&
        error.response.data.error === "Previous password is incorrect"
      ) {
        return {
          status: "password incorrect",
          message: "Previous password is incorrect",
        }
      }
      return {
        status: "failed",
        message: error.response?.data?.error || "Update failed",
      };
    }
  },
  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
});
