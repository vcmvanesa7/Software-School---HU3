'use client';

import { Button, Input } from "@heroui/react";
import { useContext, useState } from "react";
import { MyContext } from "@/context/Context";
import { loginUser } from "@/services/login";
import { notification } from "@/utils/notification";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { setUserLogged, setIsActive } = useContext(MyContext);
  const router = useRouter();

  const handleClick = async () => {
    if (!user || !pass) {
      notification("Please enter your email and password.", "warning");
      return;
    }

    try {
      const loggedUser = await loginUser(user, pass);

      // Guardar en localStorage y contexto
      localStorage.setItem("userLogged", JSON.stringify(loggedUser));
      setUserLogged(loggedUser);
      setIsActive(true);

      notification("Login successful", "success");

      // Redirección según el rol
      if (loggedUser.role === "Admin") {
        router.push("/dashboard");
      } else {
        router.push("/courses");
      }
    } catch (error: any) {
      notification(error.message || "Login failed", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Sign In
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Welcome to the administration panel
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <Input
              placeholder="Enter your username"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <Input
              placeholder="Enter your password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border border-gray-300 rounded-lg"
            />
          </div>

          <Button
            onClick={handleClick}
            className="w-full mt-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl py-3 transition-all shadow-md hover:shadow-lg"
          >
            Sign In
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            <strong>Admin:</strong> admin
          </p>
          <p>
            <strong>Password:</strong> admin123
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
