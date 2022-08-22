import { useContext } from "react";
import { TxContext } from "../../context/transactions.context";

const Title = () => {
  const { totalAmount } = useContext(TxContext);
  return (
    <div className="hudget-title">
      <h1>{totalAmount}</h1>
    </div>
  );
};

export default Title;
