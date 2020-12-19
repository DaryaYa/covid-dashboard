export default function Table(props) {
  return (
    <table border="2" width="25%" cellSpacing="0">
      <thead>
        <tr>
          {props.dataTypes.map((element, index) => {
            return <th key={index}>{element}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {props.populationPerCountry.length &&
          props.dataTypes.map((element, index) => {
            return (
              <td key={index}>
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
