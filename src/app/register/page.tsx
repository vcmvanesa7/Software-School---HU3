"use client";
import { useState } from "react";

const RegisterForm = () => {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState([])
    const [formData, setDataForm] = useState({
        FullName: "",
        Username: "",
        Email: "",
        Password: "",
        Grade: ""

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


    };



    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-lg border border-violet-300 mt-12"
        >
            <h2 className="text-2xl font-bold text-center mb-4 text-violet-700">
                Register — Kirin Art School 🎨
            </h2>

            {/* Full Name */}
            <label className="block mb-2 text-violet-600 font-medium">
                Full Name:
            </label>
            <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.FullName}
                onChange={handleChange}
                required
                className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-violet-800 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Username */}
            <label className="block mb-2 text-violet-600 font-medium">
                Username:
            </label>
            <input
                type="text"
                name="userName"
                placeholder="john123"
                value={formData.Username}
                onChange={handleChange}
                required
                className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-violet-800 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Email */}
            <label className="block mb-2 text-violet-600 font-medium">
                Email:
            </label>
            <input
                type="email"
                name="email"
                placeholder="email@email..."
                value={formData.Email}
                onChange={handleChange}
                required
                className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-violet-800 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Password */}
            <label className="block mb-2 text-violet-600 font-medium">
                Password:
            </label>
            <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.Password}
                onChange={handleChange}
                required
                className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-violet-800 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Grade */}
            <label className="block mb-2 text-violet-600 font-medium">
                Grade:
            </label>
            <select
                name="grade"
                value={formData.Grade}
                onChange={handleChange}
                required
                className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-violet-800 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
                <option value="">Selecciona tu grado</option>
                <option value="3">3°</option>
                <option value="4">4°</option>
                <option value="5">5°</option>
            </select>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className={`w-full font-semibold py-2 px-4 rounded-lg transition ${loading
                    ? "bg-violet-300 text-white cursor-not-allowed"
                    : "bg-violet-600 hover:bg-violet-700 text-white"
                    }`}
            >
                {loading ? "Sending..." : "Register ✨"}
            </button>

            {message && (
                <p className="mt-3 text-center text-violet-700 font-medium">{message}</p>
            )}
        </form>
    );
}
export default RegisterForm