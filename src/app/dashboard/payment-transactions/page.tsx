"use client";

import { PaymentTransactionsTable } from "@/components/data-table";

export default function PaymentTransactionsPage() {
  const transactions = [
    {
      id: "TXN-001",
      date: "2025-05-01",
      amount: "150.00",
      status: "Completed",
      method: "Credit Card",
    },
    {
      id: "TXN-002",
      date: "2025-05-02",
      amount: "200.00",
      status: "Pending",
      method: "PayPal",
    },
    {
      id: "TXN-003",
      date: "2025-05-03",
      amount: "50.00",
      status: "Failed",
      method: "Bank Transfer",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">
        Payment Transactions
      </h1>
      <PaymentTransactionsTable data={transactions} />
    </div>
  );
}