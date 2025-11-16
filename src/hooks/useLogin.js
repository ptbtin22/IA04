import { useMutation } from "@tanstack/react-query";
import { authAPI } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      login(data.token, data.refreshToken, {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        image: data.image,
      });

      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
