import { createContext, useEffect, useState } from "react";
const add = (transactions, transaction) => {
  return [...transactions, transaction];
};
const initialValue = [
  {
    id: 1,
    time: new Date(),
    title: "Buy cow",
    amount: 34,
  },
];
export const TransactionContext = createContext({
  transactions: [],
});
const TransactionProvider = ({ children }) => {
  const [transactions, setTransations] = useState(initialValue);
  const [totalAmount, setTotalAmount] = useState(0);
  const addTransation = (transaction) => {
    setTransations(add(transaction));
  };
  useEffect(() => {
    const newTotal = transactions.reduce(
      (total, tx) => (total += tx.amount),
      0
    );
    setTotalAmount(newTotal);
  }, [transactions]);
  const value = { transactions, totalAmount, addTransation };
  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
