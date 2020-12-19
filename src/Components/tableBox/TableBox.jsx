import styles from "./TableBox.module.scss";
import showGlobalCases from "./showGlobalCases";
import Table from "./Table/Table";

export const TableBox = (props) => {
  return (
    <div className={styles.tableBox}>
      <div className={styles.toggler}>
        <span
          onClick={() => {
            props.setCurrentPopulationIndex(
              props.changeCategoryStatus(props.currentPopulationIndex)
            );
          }}
        >
          {props.dataCategories.population[props.currentPopulationIndex]}
        </span>
      </div>
      <Table
        populationPerCountry={props.populationPerCountry}
        dataTypes={props.dataCategories.dataType}
        global={props.global}
        currentPopulationIndex={props.currentPopulationIndex}
        currentPeriodIndex={props.currentPeriodIndex}
        currentTerritoryIndex={props.currentTerritoryIndex}
        dataCategories={props.dataCategories}
        setCurrentPeriodIndex={props.setCurrentPeriodIndex}
        changeCategoryStatus={props.changeCategoryStatus}
        showGlobalCases={showGlobalCases}
      />

      <div className={styles.toggler}>
        <span
          onClick={() => {
            props.setCurrentTerritoryIndex(
              props.changeCategoryStatus(props.currentTerritoryIndex)
            );
          }}
        >
          {props.dataCategories.territory[props.currentTerritoryIndex]}
        </span>
      </div>
    </div>
  );
};
