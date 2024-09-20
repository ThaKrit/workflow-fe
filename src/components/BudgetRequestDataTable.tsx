import { patchBudgetItem } from "@/app/services/budget-items";
import { formatDecimal } from "../app/lib/format-decimal";
import { BudgetRequest } from "../app/models/budget-request";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { IBudgetItems } from "@/app/interfaces/budgetItem.interfaces";

interface BudgetRequestDataTableProps {
  items: BudgetRequest[];
}

function BudgetRequestDataTable({ items }: BudgetRequestDataTableProps) {
  const rount = useRouter();

  const handleClick = async (id: number, status: string, eId: IBudgetItems) => {
    await patchBudgetItem(id, {
      title: eId.title,
      quantity: eId.quantity,
      amount: eId.amount,
      status: status,
    });
    // alert("ADSF");
    Swal.fire({
      title: "Success!",
      text: "Update Status : " + " " + status + " " + "Complete !",
      icon: "success",
    });
    rount.push("../reload");
    console.log("Update Status Success");
    // console.log(status)
    // console.log(eId.title)
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className="">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Id
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Budget
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {items.map((request) => (
          <tr key={request.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              
                <Link
                  href={{
                    pathname: "/edit/:id",
                    query: {
                      id: request.id,
                      title: request.title,
                      quantity: request.quantity,
                      amount: request.amount,
                      status: request.status,
                    },
                  }}
                >
                  <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-600 
                          text-white rounded-md 
                            hover:bg-yellow-700 
                            focus:outline-none focus:ring-2 
                            focus:ring-yellow-500 focus:ring-offset-2"
                  >
                    Edit
                  </button>
                </Link>
              {" "}
              <button
                name="approved"
                type="submit"
                className="px-4 py-2 bg-green-600 
                          text-white rounded-md 
                            hover:bg-green-700 
                            focus:outline-none focus:ring-2 
                            focus:ring-green-500 focus:ring-offset-2"
                onClick={() => handleClick(request.id,"APPROVED", request)}
              >
                Approve
              </button>{" "}
              <button
                name="rejected"
                type="submit"
                className="px-4 py-2 bg-red-600 
                          text-white rounded-md 
                            hover:bg-red-700 
                            focus:outline-none focus:ring-2 
                            focus:ring-red-500 focus:ring-offset-2"
                onClick={() => handleClick(request.id,"REJECTED", request)}
              >
                Reject
              </button>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-right">
              {request.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="font-bold">{request.title}</span> x{" "}
              {request.quantity} Units
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
              {formatDecimal(request.amount)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
              {request.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BudgetRequestDataTable;
