const actions = [
  { label: "Send money", description: "Transfer funds instantly to any account." },
  { label: "Pay bills", description: "Set up recurring and one-time payments." },
  { label: "Deposit check", description: "Snap a photo and deposit from anywhere." },
  { label: "Set budget", description: "Create monthly budgets and track progress." },
];

export default function QuickActions() {
  return (
    <section className="rounded-4xl bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Quick actions</p>
        <h2 className="mt-4 text-2xl font-semibold text-slate-950">Fast access to common tasks</h2>
      </div>
      <div className="mt-6 grid gap-4">
        {actions.map((action) => (
          <button
            key={action.label}
            className="rounded-4xl border border-slate-200 bg-slate-50 px-5 py-4 text-left transition hover:border-emerald-300 hover:bg-emerald-50"
          >
            <p className="font-semibold text-slate-950">{action.label}</p>
            <p className="mt-2 text-sm text-slate-600">{action.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
