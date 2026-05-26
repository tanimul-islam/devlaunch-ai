import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="min-h-screen bg-white min-w-screen">
      <Sidebar />

      <div className="lg:pl-72">
        <Header />

        <main className="min-h-screen px-6 py-8 text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
