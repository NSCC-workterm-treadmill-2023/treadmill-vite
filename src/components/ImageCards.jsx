// import React from "react";
// import Image from "next/image";
// import styles from "../styles/ImagePress.module.css";

// const ImageCards = ({ images, handleImageClick, isSelected, isRunning }) => {
//   return (
 
//         <div className={styles.containerGrid}>
//           {images.map(({ src, city }, index) => (
//             <div key={index} className={styles.imgContainer}>
//               <div onClick={() => handleImageClick(city)} className="cursor-pointer">
//                 <Image
//                   src={src}
//                   alt="Video Cover"
//                   width={250}
//                   height={250}
//                   className={
//                     isSelected === city && isRunning ? styles.selectedCard : styles.card
//                   }
//                 />
//               </div>
//               <div className={styles.imgContainerOverlay}>
//                 <span className={styles.imgText}>{city}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//   );
// };



// export default ImageCards;

import styles from "../styles/ImagePress.module.css";

const ImageCards = ({ images, handleImageClick, isSelected, isRunning }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 max-h max-w-6xl mr-auto">
      {images.map(({ src, city }, index) => (
        <div key={index} className={`relative max-w-xs max-h-[200px] md:max-w-lg md:max-h-lg lg:max-w-xl lg:max-h-xl overflow-y-hidden`}>
          <div onTouchStart={() => handleImageClick(city)} onClick={() => handleImageClick(city)} className="cursor-pointer">
            <img
              src={src}
              alt="Video Cover"
              width={300}
              height={300}
              className={`${isSelected === city && isRunning ? styles.selectedCard : styles.card} w-full h-full object-cover`}
            />
          </div>
          <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white w-[320px] p-2 `}>
            <span className="text-sm">{city}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ImageCards;
