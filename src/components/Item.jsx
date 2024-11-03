function Item({ expense }) {
  return (
    <div
      className={`flex justify-between mt-5 shadow-md p-2 border-r-8 border-${
        expense.amount > 0 ? "green" : "red"
      }-500 rounded-sm`}
    >
      <h2 className="text-gray-800  font-sans">{expense.text}</h2>
      <h2 className="font-semibold">
        {expense.amount > 0 && "+"}
        {expense.amount}
      </h2>
    </div>
  );
}

export default Item;
