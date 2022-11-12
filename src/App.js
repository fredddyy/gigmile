import { Route, Routes } from "react-router-dom";
import Topbar from "./global/Topbar";
import Dashboard from "./pages/dashboard";
import Sidebar from "./global/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
