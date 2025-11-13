"use client";

import { ReactNode, useState, useEffect } from "react";
import { MyContext, UserLog } from "./Context";

interface Props {
  children: ReactNode;
}

export const Provider = ({ children }: Props) => {
  const [userLogged, setUserLogged] = useState<UserLog | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const restoreUser = () => {
      try {
        const storedUser = localStorage.getItem("userLogged");
        if (storedUser) {
          const parsedUser: UserLog = JSON.parse(storedUser);
          if (parsedUser.userName && parsedUser.role) {
            setUserLogged(parsedUser);
            setIsActive(true);
          }
        }
      } catch (error) {
        console.error("Error leyendo localStorage:", error);
      }
    };

    setTimeout(restoreUser, 0);
  }, []);

  useEffect(() => {
    if (userLogged) {
      localStorage.setItem("userLogged", JSON.stringify(userLogged));
    }
  }, [userLogged]);

  return (
    <MyContext.Provider
      value={{
        userLogged,
        setUserLogged,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
