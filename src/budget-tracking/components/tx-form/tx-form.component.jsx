import { useContext, useState } from "react";
import { TxContext } from "../../context/transactions.context";

const defaultFormField = {
  title: "",
  amount: "",
};
const TransactionForm = () => {
  const { addTransaction } = useContext(TxContext);
  const [formField, setFormField] = useState(defaultFormField);
  const { title, amount } = formField;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const tx = {
      ...formField,
      id: Math.random() * 10000,
      time: new Date(),
    };
    addTransaction(tx);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Amount</label>
          <small style={{ display: "block" }}>+ to credit, - to deposit</small>
          <input
            type="text"
            placeholder="Amount"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TransactionForm;
