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

interface OpenState {
  isOpen: boolean;
  setIsOpen: (logIn: boolean) => void;
}

export const useOpen = create<OpenState>((set) => ({
  isOpen: false,
  setIsOpen: (Open) => {
    set((state) => ({ isOpen: Open }));
  },
}));

interface PageState {
  page: string;
  setPage: (currentPage: string) => void;
}

export const usePage = create<PageState>((set) => ({
  page: "market",
  setPage: (currentPage) => {
    set((state) => ({
      page: currentPage,
    }));
  },
}));
