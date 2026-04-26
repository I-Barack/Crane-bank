'use client';

import { useAuth } from "@/app/lib/auth-context";
import { ProtectedRoute } from "@/app/lib/protected-route";
import Link from "next/link";
import { redirect } from "next/navigation";
import DashboardShell from "@/app/ui/dashboard/DashboardShell";

export default function AppPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        {/* App Nav */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">
                CB
              </div>
              <span className="text-lg font-bold text-slate-950">Crane Bank</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/app" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
                Dashboard
              </Link>
              <Link href="/app/accounts" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
                Accounts
              </Link>
              <Link href="/app/transfers" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
                Transfers
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-950">{user?.name}</p>
                <p className="text-xs text-slate-500">{user?.email}</p>
              </div>
              <button
                onClick={() => {
                  logout();
                  redirect("/");
                }}
                className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <DashboardShell userName={user?.name || "User"} />
        </main>
      </div>
    </ProtectedRoute>
  );
}
