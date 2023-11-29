import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import NewlyAddedDomain from "./pages/NewlyAddedDomain";
import CertStreamDomain from "./pages/CertStreamDomain";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index exact element={<NewlyAddedDomain />} />
          <Route path="/certstream" exact element={<CertStreamDomain />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
