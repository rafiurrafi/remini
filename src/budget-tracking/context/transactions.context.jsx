import { createContext, useEffect, useState } from "react";
const add = (txs, tx) => {
  return [txs, tx];
};
const initialValue = [
  {
    id: 1,
    time: new Date(),
    title: "Buy cow",
    amount: "+34",
  },
];
export const TxContext = createContext({
  transactions: [],
});
const TxProvider = ({ children }) => {
  const [transactions, setTransations] = useState(initialValue);
  const [totalAmount, setTotalAmount] = useState(0);
  const addTransaction = (transaction) => {
    setTransations(add(transactions, transaction));
  };
  useEffect(() => {
    const newTotal = transactions.reduce((total, tx) => {
      const sign = tx.amount[0];
      const amount = +tx.amount.slice(1);
      if (sign === "+") total += amount;
      else if (sign === "-") total -= amount;
      console.log(sign, amount);
      // total += amount;
      return total;
    }, 0);
    setTotalAmount(newTotal);
  }, [transactions]);
  const value = { transactions, totalAmount, addTransaction };
  return <TxContext.Provider value={value}>{children}</TxContext.Provider>;
};

export default TxProvider;
