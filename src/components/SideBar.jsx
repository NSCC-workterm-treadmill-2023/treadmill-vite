import { BsArrowLeftShort } from "react-icons/bs";
import { GiSprint } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";
import { SiTrainerroad } from "react-icons/si";
import { IoIosFitness } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import StartComponent from "./StartComponent.jsx";
import DashboardAnalytics from "./DashboardAnalytics.jsx";

const SideBar = ({ open, setOpen, setSelectedComponent}) => {
    const Menus = [
        { title: "Dashboard", component: <StartComponent /> },
        { title: "Analytics", icon: <GrAnalytics />, component: <DashboardAnalytics/>},
        { title: "Virtual Trainer", spacing: true, icon: <SiTrainerroad /> },
        { title: "Preset Training", icon: <IoIosFitness /> },
        { title: "Profile", spacing: true, icon: <FaUserCircle /> },
        { title: "User Login", icon: <LuLogIn /> }
    ];

    const handleIconClick = (component) => {
        setSelectedComponent(component); 
    };

    return (
        <div className={`bg-indigo-950 h-screen p-5 pt-8 ${!open ? "w-20" : "w-72"} duration-300 relative z-20`}>
        <BsArrowLeftShort
          className={`bg-white text-4xl rounded-full absolute -right-3 top-10 border-purple-900 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <GiSprint className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-4 duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl ${!open && "scale-0"}`}>Smart TreadMill</h1>
        </div>
        <ul className="pt-5">
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`} onClick={() => handleIconClick(menu.component)}>
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <RxDashboard />}
              </span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

    );
}; 

export default SideBar; 