import axiosInstance from "../lib/axios";

export const authAPI = {
  login: async (credentials) => {
    const response = await axiosInstance.post("/auth/login", credentials);
    return response.data;
  },

  refreshToken: async (refreshToken) => {
    const response = await axiosInstance.post("/auth/refresh", {
      refreshToken,
      expiresInMins: 30,
    });
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  },
};
