import Title from "./components/title/title.component";
import TransactionForm from "./components/tx-form/tx-form.component";
import TxList from "./components/tx-list/tx-list.component";
import TxProvider from "./context/transactions.context";

const BudgetApp = () => {
  return (
    <TxProvider>
      <div className="budget-app">
        <Title />
        <TxList />
        <TransactionForm />
      </div>
    </TxProvider>
  );
};

export default BudgetApp;
