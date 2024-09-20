"use client";

import { useEffect, useState } from "react";
import BudgetPanel from "@/components/BudgetPanel";
import BudgetRequestDataTable from "../components/BudgetRequestDataTable";
import Header from "@/components/Header";
import { BudgetRequest } from "./models/budget-request";
import { fetchBudgetItems, fetchLogined } from "./services/budget-items";
import Link from "next/link";

function Home() {
  const [budgetRequests, setBudgetRequests] = useState<BudgetRequest[]>([]);

  useEffect(() => {
    fetchBudgetItems().then((items) => setBudgetRequests(items));
  }, []);

  fetchLogined()
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div className="mt-4">
          <BudgetPanel items={budgetRequests} />
        </div>
        <div className="mt-4">
          <Link href="/add">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add items
            </button>{" "}
          </Link>
        </div>
        <div className="mt-4">
          <BudgetRequestDataTable items={budgetRequests} />
        </div>
      </main>
    </div>
  );
}

export default Home;
