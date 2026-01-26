import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    setError(data.message);
  } else {
    localStorage.setItem("user", JSON.stringify(data.user));
    navigate("/");
  }
};


  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Welcome back.
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Remember + Sign in */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Remember me!
            </label>

            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Forgot */}
        <div className="text-left mt-4">
          <Link
            to="/forgot-password"
            className="text-blue-600 text-sm hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* New user */}
        <div className="text-center mt-6">
          <p className="text-sm font-medium">New User?</p>
          <p className="text-sm text-gray-600 mb-3">
            Create an account in just 1 step to avail exclusive benefits
          </p>

          <Link
            to="/register"
            className="block bg-gray-900 text-white py-3 rounded-md hover:bg-green-600 transition"
          >
            CREATE ACCOUNT
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
