"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
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

      <label className="block mb-2 text-violet-600 font-medium">
        Email:
      </label>

      <input
        type="email"
        placeholder="email@email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border border-violet-300 p-2 mb-4 rounded-lg text-violet-800 placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full font-semibold py-2 px-4 rounded-lg transition ${
          loading
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
