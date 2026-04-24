import Link from "next/link";
import Nav from "./ui/nav";

const features = [
  {
    title: "Savings accounts",
    description: "Flexible savings plans with great interest, no hidden fees, and easy transfers whenever you need them.",
  },
  {
    title: "Credit cards",
    description: "Smart credit options designed for everyday spending, travel, and cashback rewards with transparent pricing.",
  },
  {
    title: "Personal loans",
    description: "Fast loan decisions for projects, education, travel, or emergency needs, backed by simple repayment schedules.",
  },
  {
    title: "Online bill pay",
    description: "Pay bills and manage subscriptions in one place with secure, one-click payments and reminders.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-950">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Nav />

        <section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-4xl bg-white/90 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl sm:p-10">
            <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-800">
              Modern banking, simplified
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Experience hassle-free banking built for modern life.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              Move faster with a digital banking experience that makes saving, spending, and managing money feel effortless.
              Everything is designed to be clear, quick, and secure so you can focus on what matters most.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/10 p-4">
                <p className="text-2xl font-semibold text-slate-950">24/7</p>
                <p className="mt-2 text-sm text-slate-600">Support and account monitoring</p>
              </div>
              <div className="rounded-3xl bg-slate-950/10 p-4">
                <p className="text-2xl font-semibold text-slate-950">No hidden fees</p>
                <p className="mt-2 text-sm text-slate-600">Transparent pricing across every plan</p>
              </div>
              <div className="rounded-3xl bg-slate-950/10 p-4">
                <p className="text-2xl font-semibold text-slate-950">Instant access</p>
                <p className="mt-2 text-sm text-slate-600">Fast onboarding and digital account setup</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -right-8 top-8 hidden rounded-[3rem] bg-emerald-200/70 blur-3xl lg:block" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-4xl border border-white/70 bg-linear-to-br from-white to-slate-100 p-6 shadow-2xl">
              <div className="flex items-center justify-between rounded-3xl bg-slate-950/95 px-5 py-4 text-white shadow-lg shadow-slate-950/20">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Reen Bank</p>
                  <p className="mt-2 text-lg font-semibold">Debit Card</p>
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-semibold text-white">
                  rb
                </div>
              </div>
              <div className="mt-8 rounded-3xl bg-slate-950 px-6 py-7 text-white shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Primary Card</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
                  <span>**** 3456</span>
                  <span>12/29</span>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm text-slate-300">
                  <span>Available Balance</span>
                  <span className="text-lg font-semibold text-white">$18,240</span>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/90 p-4 text-slate-950 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Monthly Spend</p>
                  <p className="mt-2 text-lg font-semibold">$5,240</p>
                </div>
                <div className="rounded-3xl bg-white/90 p-4 text-slate-950 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Cashback</p>
                  <p className="mt-2 text-lg font-semibold">4.2%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-20">
          <div className="rounded-4xl bg-white/90 p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Services</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Everything you need for modern banking.</h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-slate-700">
                Built for people who want quick access to accounts, card controls, savings, and reliable support, all from one polished dashboard.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white">
                  <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
          <div className="rounded-4xl bg-slate-950 px-8 py-10 text-white shadow-2xl shadow-slate-950/30 sm:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Trusted by finance teams</p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
              Your money is in good hands.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Reen Bank brings clear controls, real-time alerts, and fast insight into your cash flow so daily banking feels effortless.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {['Mastercard', 'Visa', 'PayPal', 'Payoneer'].slice(0,3).map((label) => (
                <div key={label} className="rounded-3xl bg-white/10 p-4 text-sm text-slate-200">
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-4xl bg-white/90 p-8 shadow-2xl shadow-slate-200/40 sm:p-10">
            <div className="grid gap-6">
              <div className="rounded-4xl border border-slate-200 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Payments</p>
                <p className="mt-4 text-lg font-semibold text-slate-950">Manage bills and transfers in seconds.</p>
              </div>
              <div className="rounded-4xl border border-slate-200 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Investments</p>
                <p className="mt-4 text-lg font-semibold text-slate-950">Grow your savings with intelligent account options.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-4xl bg-emerald-600/10 p-8 shadow-lg shadow-emerald-600/10 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Get started</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Enter your email and get started now.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-700">
                Join thousands of customers who are already managing their money smarter with Reen Bank.
              </p>
            </div>
            <form className="rounded-[1.75rem] bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Full name
                  <input type="text" placeholder="John Doe" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email address
                  <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" />
                </label>
              </div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Start Banking
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-20 border-t border-slate-200/80 pt-10 text-slate-700">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-semibold text-slate-950">Reen Bank</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                A modern banking experience with clear controls, smart savings, and effortless money management.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
                  <Link href="/" className="transition hover:text-slate-950">Home</Link>
              <Link href="/dashboard" className="transition hover:text-slate-950">Dashboard</Link>
              <Link href="/login" className="transition hover:text-slate-950">Login</Link>
            </div>
          </div>
          <p className="mt-10 text-sm text-slate-500">© 2026 Reen Bank. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
