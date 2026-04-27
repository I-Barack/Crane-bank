'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHome, FaChartLine, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { useAuth } from "@/app/lib/auth-context";

const Nav = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  const linkClass = (href: string) => {
    const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));
    return `flex items-center gap-2 font-[--font-poppins] transition ${isActive ? 'text-slate-950 font-semibold underline underline-offset-4 decoration-emerald-500 decoration-2' : 'text-slate-700 hover:text-emerald-700'}`;
  };

  const initials = user?.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

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
          <Link href="/home" className={linkClass('/home')}>
            <FaHome className="text-lg" /> Home
          </Link>
          <Link href="/dashboard" className={linkClass('/dashboard')}>
            <FaChartLine className="text-lg" /> Dashboard
          </Link>
          <Link href="/login" className={linkClass('/login')}>
            <FaInfoCircle className="text-lg" /> About
          </Link>
          <Link href="/register" className={linkClass('/register')}>
            <FaEnvelope className="text-lg" /> Contact
          </Link>
        </nav>

        {user ? (
          <Link href="/home" className="inline-flex items-center gap-3  px-4 py-2 text-sm font-semibold text-slate-950">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
              {initials}
            </span>
            <span className="font-[--font-poppins]">{user.name}</span>
          </Link>
        ) : (
          <Link
            href="/login"
            className="rounded-full border border-emerald-500 bg-emerald-500 px-5 py-2 text-sm font-semibold text-white font-[--font-poppins] transition hover:bg-emerald-600"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Nav;
