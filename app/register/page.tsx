import Link from "next/link";
import Nav from "../ui/nav";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background text-slate-950">
      <Nav />
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full rounded-4xl bg-white p-8 shadow-2xl shadow-slate-200/50 sm:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Register</p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-950">Create your account</h1>
            <p className="mt-3 text-sm leading-7 text-slate-600">Sign up for instant access to banking, savings, and smart money tools.</p>
          </div>

          <form className="grid gap-6">
            <label className="block text-sm font-medium text-slate-700">
              Full name
              <input type="text" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Email address
              <input type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input type="password" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-emerald-700 hover:text-emerald-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
