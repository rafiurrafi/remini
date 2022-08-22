import { useContext } from "react";
import { TransactionContext } from "../../context/transactions.context";
import TransactionSingle from "../transaction-single/transation-single.component";
import "./transaction-list.style.scss";
const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div>
      {transactions.map((tx) => (
        <TransactionSingle key={tx.id} tx={tx} />
      ))}
    </div>
  );
};

export default TransactionList;
