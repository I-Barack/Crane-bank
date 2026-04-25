import AccountSummary from "./AccountSummary";
import QuickActions from "./QuickActions";
import RecentTransactions from "./RecentTransactions";
import Link from "next/link";

const stats = [
  { label: "Monthly income", value: "$12,400", change: "+8.4%" },
  { label: "Savings growth", value: "$58,320", change: "+12.1%" },
  { label: "Spending limit", value: "$4,500", change: "-3.2%" },
];

const cards = [
  { title: "Total balance", value: "$24,860.50", subtitle: "Available funds" },
  { title: "Pending payments", value: "$3,820", subtitle: "Upcoming bills" },
];

export default function DashboardShell({userName}: {userName: string}) {
  return (
    <main className="min-h-screen bg-background text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="rounded-4xl bg-white p-8 shadow-2xl shadow-slate-200/40 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Welcome back</p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Hi, {userName}.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  Your banking dashboard gives you an instant snapshot of accounts, spending, and opportunities to save more.
                </p>
              </div>
              <div className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20">
                Live insights ready
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-4xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm text-emerald-700">{stat.change} vs last month</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl bg-emerald-600/10 p-6 shadow-2xl shadow-emerald-600/20 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Savings goal</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">$75,000 goal</h2>
              </div>
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                68%
              </span>
            </div>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/80">
              <div className="h-full w-2/3 rounded-full bg-emerald-600" />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              You're on track to hit your annual savings plan. Keep your round-ups active and revisit recurring transfers.
            </p>
            <Link href="/dashboard" className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Review plan
            </Link>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-6">
            <div className="rounded-4xl bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Accounts Overview</p>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-950">Your top accounts</h2>
                </div>
                <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">
                  Manage accounts
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {cards.map((card) => (
                  <div key={card.title} className="rounded-4xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{card.title}</p>
                    <p className="mt-4 text-3xl font-semibold text-slate-950">{card.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{card.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            <AccountSummary />
            <RecentTransactions />
          </div>

          <aside className="grid gap-6">
            <QuickActions />

            <div className="rounded-4xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/30 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Secure your account</p>
              <h2 className="mt-4 text-2xl font-semibold">Enable biometrics</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Use fingerprint or face unlock on your mobile device to keep your banking experience secure and fast.
              </p>
              <div className="mt-6 grid gap-3 rounded-4xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-300">• Card lock and unlock</p>
                <p className="text-sm text-slate-300">• Real-time fraud alerts</p>
                <p className="text-sm text-slate-300">• Secure device verification</p>
              </div>
            </div>

            <div className="rounded-4xl bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Recommended</p>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">Add a second debit card</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Get an extra card for a family member or a backup payment option with low fees and spending controls.
              </p>
              <Link href="/register" className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                Add card
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
