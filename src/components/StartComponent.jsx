import { useState, useEffect } from "react";
import DisplayImages from "./DisplayImages";
import VideoPlayer from "../pages/VideoPlayer";
import useDashboardStore from "../store";
import styles from "../styles/StartComponent.module.css";


export default function StartComponent() {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const setActiveComponent = useDashboardStore(
    (state) => state.setActiveComponent
  );
  const activeComponent = useDashboardStore((state) => state.activeComponent);
  const selectedRegion = useDashboardStore((state) => state.selectedRegion);
  const setVideoVisible = useDashboardStore((state) => state.setVideoVisible);
  const videoVisible = useDashboardStore((state) => state.videoVisible);


  const onImageClick = (itemId) => {
    setSelectedItemId(itemId);
    setVideoVisible(true);
  };

  useEffect(() => {
    if (activeComponent === "BigStartPage") {
      setActiveComponent("DisplayImages");
    }
  }, [activeComponent, setActiveComponent]);

  return (
    <>

      {/* {activeComponent === "SignIn" && !videoVisible && <SignInPage />}

      {activeComponent === "SignUp" && !videoVisible && <SignUpPage />} */}

      {activeComponent === "DisplayImages" && !videoVisible && (
        <DisplayImages //onImageClick={onImageClick}
        selectedRegion={selectedRegion}
        videoVisible={videoVisible} // Pass the videoVisible state
        />
        
      )}

      {activeComponent === "VideoPlayer" && (
        <>
          <VideoPlayer itemId={selectedItemId} />
          <button
            touch-action="none"
            onTouchStart={() => {
              setActiveComponent("DisplayImages");
              setVideoVisible(false); // Reset the videoVisible state
            }}
            onClick={() => {
              setActiveComponent("DisplayImages");
              setVideoVisible(false); // Reset the videoVisible state
            }}
            className={styles.changeVidBtn}
          >
            Change Video
          </button>
        </>
      )}
    </>
  );
}
