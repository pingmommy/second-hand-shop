import { create } from "zustand";

interface AccessTokenState {
  accessToken: string;
  setToken: (Token: string) => void;
}

export const useAccessToken = create<AccessTokenState>((set) => ({
  accessToken: "",
  setToken: (Token) => {
    set((state) => ({ accessToken: Token }));
  },
}));

interface LogInState {
  isLoggedIn: boolean;
  setIsLoggedIn: (logIn: boolean) => void;
}

export const useLogIn = create<LogInState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (logIn) => {
    set((state) => ({ isLoggedIn: logIn }));
  },
}));
