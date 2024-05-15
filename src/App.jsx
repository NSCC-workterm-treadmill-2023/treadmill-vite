import { useState } from 'react'
import StartComponent from "./components/StartComponent.jsx";
import BigStartPage from "./components/BigStartPage.jsx";
import SideBar from "./components/SideBar.jsx";
import TopBar from "./components/TopBar.jsx";
import BottomSideBar from "./components/BottomSideBar.jsx";
import './index.css';

function App() {
    const [open, setOpen] = useState(false);  // State to manage the open/close state of the sidebar
    const [selectedComponent, setSelectedComponent] = useState(<StartComponent />); // Set StartComponent as initial component

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

export default App
