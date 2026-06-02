import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLink";
import logo from "../assets/DevLaunch.svg";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-58 bg-white p-6 border-r border-gray-200 backdrop-blur-md text-white lg:block">
      <div className=" flex mb-8 items-center gap-3">
        <img src={logo} alt="DevLaunch AI Logo" className="h-10 w-auto" />
        <p className="text-black text-md font-bold ">DevLaunch ai</p>
      </div>

      <nav className="space-y-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "text-slate-300 hover:bg-violet-400 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
