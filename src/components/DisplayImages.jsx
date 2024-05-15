// import Image from "next/image";
// import useDashboardStore from "../store";
// import styles from "../styles/ImagePress.module.css";
// import getVideoUrl from "./GetVideoURL";
// import videoImages from "./VideoImages";

// export default function DisplayImages() {
//   const setItemId = useDashboardStore((state) => state.setItemId);
//   const itemId = useDashboardStore((state) => state.itemId);
//   const setActiveComponent = useDashboardStore(
//     (state) => state.setActiveComponent
//   );
//   const setVideoUrl = useDashboardStore((state) => state.setVideoUrl);
//   const isRunning = useDashboardStore((state) => state.isRunning);

//   const handleImageClick = (itemId) => {
//     setItemId(itemId);
//     const url = getVideoUrl(itemId);
//     setVideoUrl(url);
//     setActiveComponent("VideoPlayer");
//   };

  
 
//   return (
//     <div className={styles.container}>
//       <div className={styles.containerGrid}>
//         {videoImages.map(({ src, city }, index) => {
//           const isSelected = itemId; // Check if the card is selected

//           return (
//             <div key={index} className={styles.imgContainer}>
//               <div
//                 onClick={() => handleImageClick(city)}
//                 className="cursor-pointer"
//               >
//                 <Image
//                   src={src}
//                   alt="Video Cover"
//                   width={300}
//                   height={300}
//                   className={
//                     isSelected === city && isRunning
//                       ? styles.selectedCard
//                       : styles.card
//                   }
//                 />
//               </div>
//               <div className={styles.imgLabel}>
//                 <span className={styles.imgText}>{city}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import {useEffect} from "react";
import useDashboardStore from "../store";
import styles from "../styles/ImagePress.module.css";
import getVideoUrl from "./GetVideoURL";
import videoImages from "./VideoImages";
import FilterCards from "./FilterCards";
import ImageCards from "./ImageCards";

export default function DisplayImages() {
  const setItemId = useDashboardStore((state) => state.setItemId);
  const itemId = useDashboardStore((state) => state.itemId);
  const setActiveComponent = useDashboardStore((state) => state.setActiveComponent);
  const setVideoUrl = useDashboardStore((state) => state.setVideoUrl);
  const isRunning = useDashboardStore((state) => state.isRunning);
  const filteredImages = useDashboardStore((state) => state.filteredImages);
  const setFilteredImages = useDashboardStore((state) => state.setFilteredImages);
  const selectedRegion = useDashboardStore((state) => state.selectedRegion);
  const setSelectedRegion = useDashboardStore((state) => state.setSelectedRegion);

  const handleImageClick = (itemId) => {
    setItemId(itemId);
    const url = getVideoUrl(itemId);
    setVideoUrl(url);
    setActiveComponent("VideoPlayer");
  };

  useEffect(() => {
  
      const filtered = videoImages.filter(({ city }) => city.includes(selectedRegion) );
      setFilteredImages(filtered);
  
    setSelectedRegion(selectedRegion);
  }, [selectedRegion]);
  

  const handleFilter = (filter) => {
  
      const filtered = videoImages.filter(({ city }) => city === filter);
      setFilteredImages(filtered);
    
    setSelectedRegion(filter); // Update the selectedRegion state

  };

  return (
    <div className={styles.container}>
      <FilterCards handleFilter={handleFilter} selectedRegion={selectedRegion}/>
      <ImageCards
        images={filteredImages}
        handleImageClick={handleImageClick}
        isSelected={itemId}
        isRunning={isRunning}
      />
    </div>
  );
  
}
