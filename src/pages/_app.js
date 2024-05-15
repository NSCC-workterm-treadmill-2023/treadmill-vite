// This component represents the main application layout, including a sidebar navigation menu 

// Here I importing the required dependencies and components 
import '@/styles/globals.css';
import {useState} from "react";
import {BsArrowLeftShort} from "react-icons/bs"; 
import { GiSprint } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";
import { SiTrainerroad } from "react-icons/si";
import { IoIosFitness } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LuLogIn } from "react-icons/lu";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import TopBar from "@/components/TopBar";
import BottomSideBar from "@/components/BottomSideBar";
import StartComponent from '@/components/StartComponent';
import SideBar from "@/components/SideBar";
import DashboardAnalytics from './DashboardAnalytics';
import BigStartPage from '@/components/BigStartPage';


// Define the main App component
export default function App({ Component, pageProps }) {

  const [open, setOpen] = useState(false);  // State to manage the open/close state of the sidebar 
  const [selectedComponent, setSelectedComponent] = useState(<StartComponent />); // Set StartComponent as initial component

  // // Created an array menu items with their titles and optional icons imported from react-icons 
  // const Menus = [
  //   {title: "Dashboard", component: <StartComponent/>},
  //   {title: "Analytics", component: <DashboardAnalytics/>, icon: <GrAnalytics />}, 
  //   {title: "Virtual Trainer",spacing: true, icon: <SiTrainerroad />}, 
  //   {title: "Preset Training", icon: <IoIosFitness />},
  //   {title: "Profile",spacing: true, icon: <FaUserCircle />},
  //   {title: "User Login", icon: <LuLogIn />}
  // ]; 

  // const handleIconClick = (component) => {
  //   setSelectedComponent(component); 
  // }

  return (
    
    <div className="flex"> 
    <BigStartPage />
    {/* Sidebar component */}
      <SideBar open={open} setOpen={setOpen} setSelectedComponent={setSelectedComponent} />
      {/* Main content area */}   
        <div className={`flex-1 mt-[192] mb-[157]`}>
          {/* Component rendered based on routing */}
          <TopBar />
          {/* <Component {...pageProps} /> */}
          {selectedComponent}
         
          <BottomSideBar />
        </div>
    </div>
      
  );
}
//   {/* Sidebar  */}
  //     <div className ={`bg-indigo-950 h-screen p-5 pt-8  ${!open ? "w-20": "w-72"} duration-300 relative z-20`}>

  //       {/* Toggle button for opening/closing sidebar  */}
  //       <BsArrowLeftShort className={`bg-white text-4xl rounded-full absolute -right-3 top-10 border-purple-900 cursor-pointer ${!open && "rotate-180"}`}
  //       onClick={() => setOpen(!open)}/>

  //       {/* Logo and title */}
  //       <div className="inline-flex">
  //           <GiSprint  className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-4 duration-500 ${open && "rotate-[360deg]"}`}/>
  //           <h1 className={`text-white origin-left font-medium text-2xl ${!open && "scale-0"}`}>Smart TreadMill</h1>
  //       </div>
  //       {/* Menu items  */}
  //       <ul className="pt-5">
  //         {Menus.map((menu, index) => (
  //           <>
  //           <li key={index} className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md ${menu.spacing ? "mt-9": "mt-2"}`} onClick={() => handleIconClick(menu.component)}>
              
  //             {/* Display menu item icon if available, else default to a dashboard icon */}
  //             <span className="text-2xl block float-left">
  //               {menu.icon ? menu.icon : <RxDashboard />}
  //             </span>

  //             {/* Display menu item title */}             
  //             <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
  //               {menu.title}</span>
  //           </li>
  //           </>
  //         ))}
  //       </ul>  
  //     </div >      