"use client";

import { createContext } from "react";

// 🧩 Interfaz del usuario global
export interface UserLog {
  userName: string;
  role: "Admin" | "User"; // <-- coincide con backend (usa "User" con mayúscula)
  expiresAt: string;
}

// 🧩 Interfaz del contexto completo
interface MyContextType {
  userLogged: UserLog | null; // <-- más limpio que usar strings vacíos
  setUserLogged: React.Dispatch<React.SetStateAction<UserLog | null>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// 🔹 Contexto global exportado
export const MyContext = createContext<MyContextType>({
  userLogged: null,
  setUserLogged: () => {},
  isActive: false,
  setIsActive: () => {},
});
