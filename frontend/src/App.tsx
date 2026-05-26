import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
// import PocGenerator from "./pages/PocGenerator";
// import PlaybookGenerator from "./pages/PlaybookGenerator";
// import Templates from "./pages/Templates";
// import Docs from "./pages/Docs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/poc-generator" element={<PocGenerator />} />
        <Route path="/playbook-generator" element={<PlaybookGenerator />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/docs" element={<Docs />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
