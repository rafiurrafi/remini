import { useContext } from "react";
import { TxContext } from "../../context/transactions.context";
import TxSingle from "../tx-single/tx-single.component";
import "./tx-list.style.scss";
const TxList = () => {
  const { transactions } = useContext(TxContext);
  return (
    <div>
      {transactions.map((tx) => (
        <TxSingle key={tx.id} tx={tx} />
      ))}
    </div>
  );
};

export default TxList;
