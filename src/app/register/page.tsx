"use client";
import { useState } from "react";
import { createUser } from "@/services/User";
import { useRouter } from "next/router";

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [formData, setDataForm] = useState({
        Username: "",
        Email: "",
        Password: "",

    })
    const handleChange = (e) => {
        setDataForm({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const res = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.Email }),
        });

        const data = await res.json();
        setLoading(false);
        setMessage(data.message);

        const postUser = await createUser({ userName: formData.Username, email: formData.Email, password: formData.Password })
        if (postUser?.status === 200) {
            setTimeout(() => window.location.href="/login", 1500); // ✅ redirección con leve delay opcional
        }

    };



    return (
        <form
            onSubmit={handleSubmit}
            className={` max-w-sm mx-auto text-white bg-white p-6 rounded-xl shadow-2xl gap-10 mt-12 mb-12 flex flex-col`}
        >
            <div className="flex justify-center ">
                <div className=" w-[100px]">
                    <img src="/img/isotipo.png" alt="" />
                </div>
            </div>
            <div className="flex gap-10">
                <div className="flex flex-col gap-1">

                    <div>
                        <label className="block  text-black font-medium">
                            Username:
                        </label>
                        <input
                            type="text"
                            name="Username"
                            placeholder="john123"
                            value={formData.Username}
                            onChange={handleChange}
                            required
                            className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:shadow-xl"
                        />
                    </div>
                    <div>
                        <label className="block  text-black font-medium">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="Email"
                            placeholder="email@email..."
                            value={formData.Email}
                            onChange={handleChange}
                            required
                            className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:shadow-xl"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 jus">
                    <div>
                        <label className="block  text-black font-medium">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="Password"
                            placeholder="********"
                            value={formData.Password}
                            onChange={handleChange}
                            required
                            className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:shadow-xl"
                        />
                    </div>

                    <div className=" h-[100px] flex items-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full font-semibold py-2 px-4 rounded-lg transition ${loading
                                ? "bg-violet-300 text-white cursor-not-allowed"
                                : "bg-[#050a22]  hover:text-[#fdda5d99] text-white"
                                }`}
                        >
                            {loading ? "Sending..." : "Register"}
                        </button>
                    </div>



                </div>
            </div>






            {
                message && (
                    <p className="mt-3 text-center text-violet-700 font-medium">{message}</p>
                )
            }
        </form >
    );
}
export default RegisterForm