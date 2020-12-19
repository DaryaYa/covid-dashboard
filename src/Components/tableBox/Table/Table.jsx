import styles from "./Table.module.scss";

export default function Table(props) {
  return (
    <table className={styles.table} border="2" width="25%" cellSpacing="0">
      <thead>
        <tr>
          {props.dataTypes.map((element, index) => {
            return (
              <th className={styles.column} key={index}>
                {element}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {props.populationPerCountry.length &&
            props.dataTypes.map((element, index) => {
              return (
                <td className={styles.column} key={index}>
                  {props.showGlobalCases(
                    props.populationPerCountry,
                    props.global,
                    props.currentPopulationIndex,
                    props.currentPeriodIndex,
                    props.currentTerritoryIndex,
                    index
                  )}
                </td>
              );
            })}
          <td
            rowSpan="2"
            className={(styles.column, styles.toggler)}
            onClick={() => {
              props.setCurrentPeriodIndex(
                props.changeCategoryStatus(props.currentPeriodIndex)
              );
            }}
          >
            {props.dataCategories.period[props.currentPeriodIndex]}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
