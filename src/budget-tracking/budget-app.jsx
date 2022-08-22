import Title from "./components/title/title.component";
import TransactionList from "./components/transation-list/transation-list.component";
import TransactionProvider from "./context/transactions.context";

const BudgetApp = () => {
  return (
    <TransactionProvider>
      <div className="budget-app">
        <Title />
        <TransactionList />
      </div>
    </TransactionProvider>
  );
};

export default BudgetApp;
