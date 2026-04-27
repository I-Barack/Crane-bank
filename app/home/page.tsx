'use client';

import Link from "next/link";
import Nav from "../ui/nav";
import { ProtectedRoute } from "../lib/protected-route";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        <Nav />

        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Welcome home</p>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Your banking hub starts here.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Access your latest balances, manage payments, and stay on top of your cash flow from one central place.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    View dashboard
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Open an account
                  </Link>
                </div>
              </div>

              <div className="rounded-4xl bg-linear-to-br from-emerald-500 to-teal-600 p-10 text-white shadow-2xl shadow-emerald-300/30">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-emerald-100">Today&apos;s snapshot</p>
                    <p className="mt-4 text-3xl font-semibold">$24,860.50</p>
                    <p className="mt-2 text-sm text-emerald-100/80">Available balance across all accounts</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white/10 p-5">
                      <p className="text-xs uppercase tracking-[0.26em] text-emerald-100/80">Spending</p>
                      <p className="mt-3 text-xl font-semibold">$4,220</p>
                    </div>
                    <div className="rounded-3xl bg-white/10 p-5">
                      <p className="text-xs uppercase tracking-[0.26em] text-emerald-100/80">Savings</p>
                      <p className="mt-3 text-xl font-semibold">$58,320</p>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-xs uppercase tracking-[0.26em] text-emerald-100/80">Next bill</p>
                    <p className="mt-3 text-lg font-semibold">Utility payment due Tuesday</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50">
              <h2 className="text-lg font-semibold text-slate-950">Quick actions</h2>
              <p className="mt-3 text-sm text-slate-600">Send money, pay bills, or top up your wallet with one click.</p>
            </div>
            <div className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50">
              <h2 className="text-lg font-semibold text-slate-950">Recent activity</h2>
              <p className="mt-3 text-sm text-slate-600">Review your latest transactions and spot anything that needs attention.</p>
            </div>
            <div className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-200/50">
              <h2 className="text-lg font-semibold text-slate-950">Cards and accounts</h2>
              <p className="mt-3 text-sm text-slate-600">Manage accounts and cards securely from your home dashboard.</p>
            </div>
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}
