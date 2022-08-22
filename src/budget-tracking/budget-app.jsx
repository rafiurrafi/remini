import TransactionProvider from "./context/transactions.context";

const BudgetApp = () => {
  return (
    <TransactionProvider>
      <div className="budget-app"></div>
    </TransactionProvider>
  );
};

export default BudgetApp;
