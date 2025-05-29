"use client";

import React, {
  createContext,
  useContext,
  useState,
  useOptimistic,
} from "react";
import { User } from "./auth-server";

interface AuthContextType {
  user: User | null;
  isLoggingOut: boolean;
  optimisticLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
  initialUser: User | null;
}

export function AuthProvider({ children, initialUser }: AuthProviderProps) {
  const [user] = useState<User | null>(initialUser);
  const [optimisticUser, setOptimisticUser] = useOptimistic(
    user,
    (state, action: "logout") => {
      if (action === "logout") return null;
      return state;
    }
  );

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const optimisticLogout = () => {
    setIsLoggingOut(true);
    setOptimisticUser("logout");
  };

  const value = {
    user: optimisticUser,
    isLoggingOut,
    optimisticLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
