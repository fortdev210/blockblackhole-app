import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { AuthUserType } from "../types/user-types";
import axiosInstance from "../api/axios";

interface AuthContextType {
  authToken: string;
  user: AuthUserType;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getInitialState = () => {
  const currentUser = sessionStorage.getItem("currentUser");
  return currentUser ? JSON.parse(currentUser) : null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUserType | null>(getInitialState);
  const [authToken, setAuthToken] = useState<string>("");

  useEffect(() => {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  const login = async (username: string, password: string) => {
    const res = await axiosInstance.post("/auth/signin", {
      username,
      password,
    });
    setUser({ username: res.data.username, isAdmin: res.data.isAdmin });
    setAuthToken(res.data.token);
    localStorage.setItem("token", res.data.token); // Store token
  };

  const logout = () => {
    setUser(null);
    setAuthToken("");
    localStorage.removeItem("token"); // Clear token
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token || "");
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
