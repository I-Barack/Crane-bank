import Link from "next/link";
import Image from "next/image";
import { FaCreditCard, FaGlobeAmericas, FaPiggyBank, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaCreditCard,
    title: "Instant Accounts",
    description: "Open your bank account in minutes. No paperwork, no waiting around.",
  },
  {
    icon: FaGlobeAmericas,
    title: "Send Money Global",
    description: "Transfer money worldwide at real exchange rates with low fees.",
  },
  {
    icon: FaPiggyBank,
    title: "Smart Savings",
    description: "Earn competitive interest rates on your savings automatically.",
  },
  {
    icon: FaShieldAlt,
    title: "Bank-Grade Security",
    description: "Military-grade encryption keeps your money safe 24/7.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelancer",
    text: "Finally a bank that doesn't treat me like a number. Open in 10 mins!",
    avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    name: "James Rodriguez",
    role: "Digital Nomad",
    text: "Best for travel. Real exchange rates, no hidden fees. Worth every penny.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    name: "Amara Okonkwo",
    role: "Entrepreneur",
    text: "Perfect for my business. Fast transfers and instant notifications.",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">
              CB
            </div>
            <span className="font-[--font-poppins] text-lg font-bold text-slate-950">Crane Bank</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="font-[--font-poppins] inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
            >
              Login            
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
              <span className="text-xs font-semibold text-emerald-700">✨ Fast, Secure, Global</span>
            </div>
            <h1 className="font-[--font-poppins] text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Banking, but better.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              Join thousands of people who switched to smarter banking. Real exchange rates. No hidden fees. Your money, your way.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Learn more...
              </Link>
            </div>
            <div className="mt-12 grid gap-6 grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-slate-950">100K+</p>
                <p className="text-sm text-slate-600">Active Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-950">50M+</p>
                <p className="text-sm text-slate-600">Transactions Daily</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-950">180+</p>
                <p className="text-sm text-slate-600">Countries Supported</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-full h-full inset-0 -right-8 top-8 rounded-[2rem] bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-3xl" />
            <Image
              fill
              src="/landing-img.jpg"
              alt="Landing Image mockup"
              className="rounded-2xl shadow-2xl shadow-slate-200/40"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-slate-200/50 bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-[--font-poppins] text-3xl font-bold text-slate-950 sm:text-4xl">
              Everything you need in modern banking
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              No corporate fluff. Just powerful tools designed for your life.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-emerald-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
                    <IconComponent className="text-xl" />
                  </div>
                  <h3 className="font-[--font-poppins] font-semibold text-slate-950">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[--font-poppins] text-3xl font-bold text-slate-950 sm:text-4xl">
              Loved by users worldwide
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
                <div className="mb-4 inline-flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-sm">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-slate-600 italic">&apos;{testimonial.text}&apos;</p>
                <div className="mt-4">
                  <p className="font-[--font-poppins] font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[--font-poppins] text-4xl font-bold text-white">
            Ready to join the banking revolution?
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Join thousands of users who already ditched their old bank.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center">
            <Link
              href="/register"
              className="font-[--font-poppins] inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-emerald-600 shadow-lg transition hover:bg-slate-50"
            >
              Sign up free
            </Link>
            <Link
              href="/login"
              className="font-[--font-poppins] inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 bg-gradient-to-br from-slate-950 to-slate-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">
                  CB
                </div>
                <p className="font-[--font-poppins] font-semibold">Crane Bank</p>
              </div>
              <p className="mt-2 text-sm text-slate-300">Modern banking for modern people.</p>
            </div>
            <div>
              <p className="font-[--font-poppins] text-sm font-semibold">Product</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition">Security</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-[--font-poppins] text-sm font-semibold">Company</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white transition">About</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-[--font-poppins] text-sm font-semibold">Legal</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2026 Crane Bank. All rights reserved. Built with ✨</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
