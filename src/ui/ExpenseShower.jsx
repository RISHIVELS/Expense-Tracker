import { useContext } from "react";
import { ExpenseContext } from "../components/ExpenseContext";

function ExpenseShower() {
  const { expenses } = useContext(ExpenseContext);

  const balance = expenses.reduce((acc, curr) => curr.amount + acc, 0);

  const income = expenses.reduce(
    (acc, curr) => (curr.amount > 0 ? curr.amount + acc : acc),
    0
  );

  const expense = expenses.reduce(
    (acc, curr) => (curr.amount < 0 ? curr.amount + acc : acc),
    0
  );

  const positiveExpense = Math.abs(expense);
  return (
    <div>
      <div className="mt-7 mb-5">
        <h1 className="font-sans font-medium text-gray-700">YOUR BALANCE</h1>
        <h1 className="text-2xl font-semibold">${balance}</h1>
      </div>
      <div className="flex gap-x-20 border shadow-md p-4 px-8">
        <div className=" border-r-2 px-10">
          <h2 className="text-xl font-medium py-1">INCOME</h2>
          <h2 className="text-green-500 font-semibold text-xl">${income}</h2>
        </div>
        <div>
          <h2 className="text-xl font-medium py-1">EXPENSE</h2>
          <h2 className="text-red-600 font-semibold text-xl">
            ${positiveExpense}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ExpenseShower;
