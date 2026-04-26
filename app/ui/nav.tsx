
'use client';

import Link from "next/link";
import { FaHome, FaChartLine, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Nav = () => {
  return (
    <header className="w-full py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold text-slate-950">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">
            CB
          </span>
          <span className="font-[--font-poppins]">Crane Bank</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <Link href="/" className="flex items-center gap-2 font-[--font-poppins] transition hover:text-emerald-700">
            <FaHome className="text-lg" /> Home
          </Link>
          <Link href="/dashboard" className="flex items-center gap-2 font-[--font-poppins] transition hover:text-emerald-700">
            <FaChartLine className="text-lg" /> Dashboard
          </Link>
          <Link href="/login" className="flex items-center gap-2 font-[--font-poppins] transition hover:text-emerald-700">
            <FaSignInAlt className="text-lg" /> Login
          </Link>
          <Link href="/register" className="flex items-center gap-2 font-[--font-poppins] transition hover:text-emerald-700">
            <FaUserPlus className="text-lg" /> Register
          </Link>
        </nav>

        <Link
          href="/login"
          className="rounded-full border border-emerald-500 bg-emerald-500 px-5 py-2 text-sm font-semibold text-white font-[--font-poppins] transition hover:bg-emerald-600"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Nav;