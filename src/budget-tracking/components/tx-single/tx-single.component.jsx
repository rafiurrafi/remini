import "./tx-single.style.scss";
const TxSingle = ({ tx }) => {
  return (
    <div className="transaction-single">
      <div>{tx.title}</div>
      <div>{tx.amount}</div>
    </div>
  );
};

export default TxSingle;
