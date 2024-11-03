import React from "react";

import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [expenses, setExpenses] = useState([]);

  function handleSubmit() {
    if (!text || !amount || amount === 0) return;
    const item = {
      amount: Number(amount),
      text,
    };
    setExpenses((prevList) => [...prevList, item]);
    setAmount("");
    setText("");
  }

  return (
    <ExpenseContext.Provider
      value={{
        text,
        setText,
        amount,
        setAmount,
        handleSubmit,
        expenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
