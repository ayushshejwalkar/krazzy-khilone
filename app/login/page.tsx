"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-black text-black">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-gray-500">
            Login to continue shopping at
            <span className="font-semibold text-orange-500">
              {" "}Krazzy Khilone
            </span>
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block font-semibold">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4">
              <Mail size={18} className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-3 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-semibold">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4">
              <Lock size={18} className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-3 py-3 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-orange-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm text-gray-500">
              OR
            </span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full rounded-xl border border-gray-300 py-3 font-semibold transition hover:bg-gray-100"
          >
            Continue with Google
          </button>

        </form>

        {/* Register */}
        <p className="mt-8 text-center text-gray-500">
          New customer?{" "}
          <Link
            href="/register"
            className="font-semibold text-orange-500 hover:underline"
          >
            Create Account
          </Link>
        </p>

      </div>
    </main>
  );
}