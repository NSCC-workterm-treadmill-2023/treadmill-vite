import styles from "../styles/ImagePress.module.css";
import useDashboardStore from "../store";


const FilterCards = ({ handleFilter }) => {
  const regions = ["NORTH AMERICA",  "AFRICA", "EUROPE", "SOUTH AMERICA", "ASIA", "NATURAL WONDERS"];
  const selectedRegion = useDashboardStore((state) => state.selectedRegion);

  return (
    <div className={styles.filterContainer}>
      <h3 className="font-bold text-center text-white text-[20px]">CHOOSE YOUR VIRTUAL ADVENTURE</h3>
      <ul className={styles.filterList}>
        {regions.map((region) => (
          <li
            key={region}
            className={selectedRegion === region ? styles.selectedFilterItem : styles.filterItem}
            onTouchStart={() => handleFilter(region)}
            //onClick={() => handleFilter(region)}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCards;
