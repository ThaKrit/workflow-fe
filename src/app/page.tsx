"use client";

import { useEffect, useState } from "react";
import BudgetPanel from "@/components/BudgetPanel";
import BudgetRequestDataTable from "../components/BudgetRequestDataTable";
import Header from "@/components/Header";
import { BudgetRequest } from "./models/budget-request";
import { fetchLogin, fetchBudgetItems } from "./services/budget-items";
import Link from 'next/link'


// let nextId=3
function Home() {
  
  const [budgetRequests, setBudgetRequests] = useState<BudgetRequest[]>([]);

  useEffect(() => {
    // fetchLogin();
    fetchBudgetItems().then((items) => setBudgetRequests(items));
  }, []);

  // const addRequest = async (newRequest: BudgetRequest) => {
  //   const insertedRequest = await createBudgetItem({
  //     title: newRequest.title,
  //     quantity: newRequest.quantity,
  //     price: newRequest.price,
  //   });
  //   setBudgetRequests([...budgetRequests, insertedRequest]);
  // };
  
  // const [newRequest, setNewRequest] = useState<BudgetRequest>({
  //   id: 0,
  //   title: "",
  //   price: 0,
  //   quantity: 1,
  //   status: "APPROVED",
  // });

  // const updateField = (event: ChangeEvent<HTMLInputElement>) => {
  //   const value =
  //     event.target.type === "number"
  //       ? Number(event.target.value)
  //       : event.target.value;
  //   setNewRequest({
  //     ...newRequest,
  //     [event.target.name]: value,
  //   });
  // };

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   addRequest({
  //     id: nextId++,
  //     title: newRequest.title,
  //     price: newRequest.price,
  //     quantity: 1,
  //     status: "APPROVED",
  //   });
  // };

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div className="mt-4">
          <BudgetPanel items={budgetRequests} />
        </div>
        <div className="mt-4">
        <Link href="/add"><button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add items
              </button> </Link>
        </div>
        
         {/* <form onSubmit={handleSubmit}>
          <div>
            Title:
            <input
              name="title"
              value={newRequest.title}
              onChange={updateField}
            />
          </div>
          <div>
            Amount:
            <input
              name="price"
              type="number"
              value={newRequest.price}
              onChange={updateField}
            />
          </div>
          <button>Add</button>
        </form>  */}
        <div className="mt-4">
          <BudgetRequestDataTable items={budgetRequests} />
        </div>
      </main>
    </div>
  );
}

export default Home;
