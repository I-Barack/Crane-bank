
import Link from "next/link";

const Nav = () => {
  return (
    <header className="w-full py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold text-slate-950">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
            rb
          </span>
          <span>Reen Bank</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <Link href="/" className="transition hover:text-emerald-700">
            Home
          </Link>
          <Link href="/dashboard" className="transition hover:text-emerald-700">
            Dashboard
          </Link>
          <Link href="/login" className="transition hover:text-emerald-700">
            Login
          </Link>
          <Link href="/register" className="transition hover:text-emerald-700">
            Register
          </Link>
        </nav>

        <Link
          href="/login"
          className="rounded-full border border-emerald-500 bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Nav;