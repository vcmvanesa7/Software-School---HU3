'use client';

import { Button, Input } from "@heroui/react";
import { useContext, useState } from "react";
import { MyContext } from "@/context/Context";
import { loginUser } from "@/services/login";
import { notification } from "@/utils/notification";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { setUserLogged, setIsActive } = useContext(MyContext);
  const router = useRouter();

  const handleClick = async () => {
     console.log("Sign In button clicked ✅");
    if (!user || !pass) {
      notification("Please enter your email and password.", "warning");
      return;
    }

    try {
      const loggedUser = await loginUser(user, pass);

      
      Cookies.set("userLogged", JSON.stringify(loggedUser), {expires: 1/48});
      localStorage.setItem("userLogged", JSON.stringify(loggedUser));
      setUserLogged(loggedUser);
      setIsActive(true);

      notification("Login successful", "success");
      console.log(loggedUser.userName)
      console.log(loggedUser.role)
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6">
  <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10 border border-gray-100">
    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
      Sign In
    </h1>

    <p className="text-center text-gray-500 mb-10">
      Welcome to the administration panel
    </p>

    <div className="space-y-6">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Username
        </label>
        <Input
          placeholder="Enter your username"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-black"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Password
        </label>
        <Input
          placeholder="Enter your password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-black"
        />
      </div>

      <Button
        onPress={handleClick}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl py-3 text-lg transition-shadow shadow-md hover:shadow-lg"
      >
        Sign In
      </Button>
    </div>

    <div className="mt-8 text-center text-sm text-gray-500">
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
