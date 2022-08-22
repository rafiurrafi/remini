import "./transaction-single.style.scss";
const TransactionSingle = ({ tx }) => {
  console.log(tx);
  return (
    <div className="transaction-single">
      <div>{tx.title}</div>
      <div>{tx.amount}</div>
    </div>
  );
};

export default TransactionSingle;
