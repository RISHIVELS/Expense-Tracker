import { useContext } from "react";
import { ExpenseContext } from "../components/ExpenseContext";
function Adder() {
  const { setText, text, amount, setAmount, handleSubmit } =
    useContext(ExpenseContext);

  return (
    <div className="mt-6">
      <h1 className="font-semibold font-sans text-xl border-b-2 pb-2 border-gray-300">
        Add new transaction
      </h1>
      <h2 className="py-3 font-medium">Text</h2>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="Enter text..."
        className="border-[1.5px] px-2 py-2 w-full"
      />
      <h2 className="pt-3 font-medium">Amount</h2>
      <h2 className="pb-2">(Negative-expense,Positive-income)</h2>
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount..."
        value={amount}
        className="border-[1.5px] px-2 py-2 mt-2 w-full"
      />
      <button
        className="w-full p-2  text-white bg-purple-600 mt-5 rounded-sm"
        onClick={handleSubmit}
      >
        Add transaction
      </button>
    </div>
  );
}

export default Adder;
