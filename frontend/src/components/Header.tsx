import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <header className="sticky top-0 z-10  bg-white px-3 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <h3 className="text-md font-semibold text-black ">Dashboard</h3>

        {/* Right side */}
        <div className="flex items-center gap-5">
          {/* Notification */}
          <button className="relative text-text-gray-500 hover:text-black">
            <IoIosNotifications className="text-2xl" />

            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-blue-600"></span>
          </button>

          {/* User profile */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-300"></div>

            <span className="text-sm font-medium text-slate-800">
              Developer
            </span>

            <IoIosArrowDown className="text-lg text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
