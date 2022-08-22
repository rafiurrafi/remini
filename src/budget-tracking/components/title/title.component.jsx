import { useContext } from "react";
import { TransactionContext } from "../../context/transactions.context";

const Title = () => {
  const { totalAmount } = useContext(TransactionContext);
  return (
    <div className="hudget-title">
      <h1>{totalAmount}</h1>
    </div>
  );
};

export default Title;
