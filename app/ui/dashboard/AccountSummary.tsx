const accountSummary = [
  { name: "Checking", balance: "$12,520.40", status: "Primary account" },
  { name: "Savings", balance: "$8,760.10", status: "Goal fund" },
  { name: "Investment", balance: "$3,580.00", status: "Growth portfolio" },
];

export default function AccountSummary() {
  return (
    <section className="rounded-4xl bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Account summary</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">Track your money in one place</h2>
        </div>
        <p className="text-sm text-slate-600">Updated just now</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {accountSummary.map((account) => (
          <div key={account.name} className="rounded-4xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{account.name}</p>
            <p className="mt-4 text-2xl font-semibold text-slate-950">{account.balance}</p>
            <p className="mt-2 text-sm text-slate-600">{account.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
