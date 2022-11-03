// import BudgetApp from "./budget-tracking/budget-app";
import { Provider } from "react-redux";
import QuoteGenApp from "./quote-gen/quote-gen-app";
import store from "./quote-gen/store/store";
const App = () => {
  // Working with api map
  // https://www.youtube.com/playlist?list=PLWnON6N0wn-GBZi4cj_sz9grBtNZec3Tm
  return (
    <div>
      {/* <BudgetApp /> */}
      <Provider store={store}>
        <QuoteGenApp />
      </Provider>
    </div>
  );
};

export default App;
