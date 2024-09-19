"use client";
// import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from 'next/navigation';
// import { useEffect } from "react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BudgetRequest } from "../models/budget-request";
import { createBudgetItem, fetchBudgetItems, fetchLogin } from "../services/budget-items";
import { useForm } from "react-hook-form";
interface BudgetRequestDataTableProps{
    users: BudgetRequest[];
}


function login() {
 

    const[chkLog , setchkLog] = useState();

  useEffect(() => {
    // fetchLogin();
    fetchLogin().then((res) => console.log("Username :"+ res.username + "PassWord :" + res.password))
    
  }, []);

  return (
    
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Please Sign In</h2>
          <form className="space-y-4" >
            <div>
              <label htmlFor="title" className="block text-lg font-medium ">
                Username
              </label>
              <input
                name="username"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              />
             
            </div>
            <div>
              <label htmlFor="quantity" className="block text-lg font-medium ">
                Password
              </label>
              <input
              name="password"
              type="password"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              />
            </div>
            
            <div className="flex space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:greem-blue-500 focus:ring-offset-2"
              >
                Sign In
              </button>
              <Link
                href="#"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Cancle
              </Link>
            </div>
          </form>
        </div>
      </div>
      
    </main>
  );
}

export default login;

