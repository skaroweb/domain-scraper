import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import NewlyAddedDomain from "./pages/NewlyAddedDomain";
import CertStreamDomain from "./pages/CertStreamDomain";
import BackToTopButton from "./components/Util/BackToTopButton";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index exact element={<NewlyAddedDomain />} />
          <Route path="/certstream" exact element={<CertStreamDomain />} />
        </Route>
      </Routes>
      <BackToTopButton />
    </div>
  );
}

export default App;
