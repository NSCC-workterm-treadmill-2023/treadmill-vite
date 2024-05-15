import useDashboardStore from "../store";
import styles from "../styles/BigStartButton.module.css";

export default function BigStartPage() {
  const setCloseStartMenu = useDashboardStore(
    (state) => state.setCloseStartMenu
  );
  const closeStartMenu = useDashboardStore((state) => state.closeStartMenu);

  const closeMenu = () => {
    setCloseStartMenu(true);
  };

  return (
    !closeStartMenu && (
      <div className={styles.container}>
        <button
          //touch-action="none"
          className={styles.getStarted}
          onTouchStart={closeMenu}
          onClick={closeMenu}
        >
          GET STARTED
        </button>
      </div>
    )
  );
}
