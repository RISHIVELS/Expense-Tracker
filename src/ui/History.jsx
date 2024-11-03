import { useContext } from "react";
import Item from "../components/Item";
import { ExpenseContext } from "../components/ExpenseContext";

function History() {
  const { expenses } = useContext(ExpenseContext);
  return (
    <div>
      <div className="flex flex-col mt-5">
        <h1 className="font-semibold font-sans border-b-2 pb-2">History</h1>
        {expenses.map((expense) => (
          <Item expense={expense} key={expense.text} />
        ))}
      </div>
    </div>
  );
}

export default History;
