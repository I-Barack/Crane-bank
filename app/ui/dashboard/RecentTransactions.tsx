const transactions = [
  { date: "20 Apr", description: "Grocery shopping", amount: "- $128.40", category: "Food" },
  { date: "19 Apr", description: "Salary deposit", amount: "+ $4,200.00", category: "Income" },
  { date: "18 Apr", description: "Netflix subscription", amount: "- $16.99", category: "Subscription" },
  { date: "17 Apr", description: "Coffee shop", amount: "- $8.70", category: "Food" },
  { date: "16 Apr", description: "Utility bill", amount: "- $94.20", category: "Bills" },
];

export default function RecentTransactions() {
  return (
    <section className="rounded-4xl bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-700">Recent activity</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">Latest transactions</h2>
        </div>
        <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
          View all
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-700">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="py-3 pr-6 font-semibold">Date</th>
              <th className="py-3 pr-6 font-semibold">Description</th>
              <th className="py-3 pr-6 font-semibold">Category</th>
              <th className="py-3 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {transactions.map((transaction) => (
              <tr key={transaction.date + transaction.amount}>
                <td className="py-4 pr-6 font-medium text-slate-950">{transaction.date}</td>
                <td className="py-4 pr-6">{transaction.description}</td>
                <td className="py-4 pr-6 text-slate-500">{transaction.category}</td>
                <td className={`py-4 font-semibold ${transaction.amount.startsWith("+") ? "text-emerald-700" : "text-slate-950"}`}>
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
