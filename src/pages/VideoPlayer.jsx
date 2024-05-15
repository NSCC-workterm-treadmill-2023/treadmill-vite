import useDashboardStore from "../store";
import styles from "../styles/VideoPlayer.module.css"

export default function VideoPlayer() {
  const videoUrl = useDashboardStore((state) => state.videoUrl);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <video src={videoUrl} autoPlay muted loop />
        </div>
      </div>
    </>
  );


 }


//   return (
//     <div className={styles.container}>
//       <div className={`${styles.subContainer} ${styles.fullScreen}`}>
//         <video src={videoUrl} autoPlay muted loop />
//       </div>
//     </div>
//   );