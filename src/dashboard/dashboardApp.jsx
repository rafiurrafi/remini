import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Orders from "./pages/orders";
import Employees from "./pages/employees";
import Customers from "./pages/customers";
import Canbar from "./pages/canbar";
import Editor from "./pages/editor";
import Calendar from "./pages/calender";
import ColorPicker from "./pages/color-picker";
import Line from "./pages/charts/line";
import Area from "./pages/charts/area";
import Bar from "./pages/charts/bar";
import Pie from "./pages/charts/pie";
import Financial from "./pages/charts/financial";
import Pyramid from "./pages/charts/pyramid";
import Stacked from "./pages/charts/stacked";
import ColorMapping from "./pages/charts/color-mapping";
import Sidebar from "./components/sidebar";
import "./dashboard.scss";
function Dashboard() {
  return <h1>Dahs</h1>;
}
const DashboardApp = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <div>
          <h1>Dashboard</h1>
          <TooltipComponent position="top" content="Settings">
            <button className="setting-btn">
              <FiSettings />
            </button>
          </TooltipComponent>
          <div>{activeMenu ? <Sidebar /> : <div>Sidebar 0 </div>}</div>
          <div className="main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ecommerce" element={<Dashboard />} />
              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              {/* apps  */}
              <Route path="/canban" element={<Canbar />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default DashboardApp;
