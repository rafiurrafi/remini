// import BudgetApp from "./budget-tracking/budget-app";
import { Provider } from "react-redux";
import ChartApp from "./chart/chart-app.jsx";
import DashboardApp from "./dashboard/dashboardApp.jsx";
import MusicApp from "./music-app/music-app.jsx";
import PassGenApp from "./pass-gen/pass-gen-app.jsx";
import QuoteGenApp from "./quote-gen/quote-gen-app";
import store from "./quote-gen/store/store";
const App = () => {
  // Working with api map
  // https://www.youtube.com/playlist?list=PLWnON6N0wn-GBZi4cj_sz9grBtNZec3Tm
  return (
    <div>
      <ChartApp />
    </div>
  );
};

export default App;
