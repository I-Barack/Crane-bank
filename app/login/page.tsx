'use client';

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/app/lib/auth-context";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-bold text-white mb-4">
            CB
          </div>
          <h1 className="text-3xl font-bold text-slate-950">Welcome back</h1>
          <p className="mt-2 text-slate-600">Sign in to your Crane Bank account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-950 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-950 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 transition"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 border-t border-slate-200" />
          <span className="text-xs text-slate-500">Demo credentials</span>
          <div className="flex-1 border-t border-slate-200" />
        </div>

        {/* Demo Info */}
        <div className="rounded-lg bg-slate-100 p-4 text-sm text-slate-700 mb-6">
          <p className="font-semibold mb-2">Demo Account:</p>
          <p>Email: demo@example.com</p>
          <p>Password: password123</p>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold text-emerald-600 hover:text-emerald-700">
            Sign up free
          </Link>
        </p>

        <p className="text-center text-sm text-slate-600 mt-4">
          <Link href="/" className="hover:text-slate-950">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
