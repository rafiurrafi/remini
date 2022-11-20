import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
function Dashboard() {
  return <h1>Dahs</h1>;
}
const DashboardApp = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <div>
          <h1>Dashboard</h1>
          <TooltipComponent position="top" content="Settings">
            <button>
              <FiSettings />
            </button>
          </TooltipComponent>
          <div>{activeMenu ? <div>Sidebar </div> : <div>Sidebar 0 </div>}</div>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ecommerce" element={<Dashboard />} />
              {/* pages  */}
              <Route path="/orders" element={<Dashboard />} />
              <Route path="/employees" element={<Dashboard />} />
              <Route path="/customers" element={<Dashboard />} />
              {/* apps  */}
              <Route path="/canban" element={<Dashboard />} />
              <Route path="/editor" element={<Dashboard />} />
              <Route path="/calendar" element={<Dashboard />} />
              <Route path="/color-picker" element={<Dashboard />} />
              {/* charts  */}
              <Route path="/line" element={<Dashboard />} />
              <Route path="/area" element={<Dashboard />} />
              <Route path="/bar" element={<Dashboard />} />
              <Route path="/pie" element={<Dashboard />} />
              <Route path="/financial" element={<Dashboard />} />
              <Route path="/pyramid" element={<Dashboard />} />
              <Route path="/stacked" element={<Dashboard />} />
              <Route path="/color-mapping" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default DashboardApp;
