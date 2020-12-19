export default function showGlobalCases(
  populationPerCountry,
  global,
  currentPopulationIndex,
  currentPeriodIndex,
  currentTerritoryIndex,
  dataType
  ) {

  const totalPopulation = populationPerCountry.reduce((acc, elem) => acc + Number(elem.population), 0)
  const populationToCompare = 100000
  const populationIndex100k = totalPopulation / populationToCompare

  // Sick
  const allTimeWorldTotalCases = global.TotalConfirmed;
  const lastDayWorldTotalCases = global.NewConfirmed;
  const allTimeWorldPer100Cases = Math.round(global.TotalConfirmed / populationIndex100k); // разделить на население
  const lastDayWorldPer100Cases = Math.round(global.NewConfirmed / populationIndex100k); // разделить на население

  // Deaths
  const allTimeWorldTotalDeaths = global.TotalDeaths;
  const allTimeWorldPer100Deaths = Math.round(global.TotalDeaths / populationIndex100k); // разделить на население
  const lastDayWorldTotalDeaths = global.NewDeaths;
  const lastDayWorldPer100Deaths = Math.round(global.NewDeaths / populationIndex100k); // разделить на население

  // Recoveries
  const allTimeWorldTotalRecovered = global.TotalRecovered;
  const allTimeWorldPer100Recovered = Math.round(global.TotalRecovered / populationIndex100k); // разделить на население
  const lastDayWorldTotalRecovered = global.NewRecovered;
  const lastDayWorldPer100Recovered = Math.round(global.NewRecovered / populationIndex100k); // разделить на население


  if (
    currentPopulationIndex === 0
    && currentPeriodIndex === 0
    && currentTerritoryIndex === 0
  ) {

    if (dataType === 0) {
      return allTimeWorldTotalCases;
    } else if (dataType === 1) {
      return allTimeWorldTotalDeaths;
    } else {
      return allTimeWorldTotalRecovered;
    }
  }

  if (
    currentPopulationIndex === 1
    && currentPeriodIndex === 0
    && currentTerritoryIndex === 0
  ) {

    if (dataType === 0) {
      return allTimeWorldPer100Cases;
    } else if (dataType === 1) {
      return allTimeWorldPer100Deaths;
    } else {
      return allTimeWorldPer100Recovered;
    }

  }

  if (
    currentPopulationIndex === 0
    && currentPeriodIndex === 1
    && currentTerritoryIndex === 0
  ) {

    if (dataType === 0) {
      return lastDayWorldTotalCases;
    } else if (dataType === 1) {
      return lastDayWorldTotalDeaths;
    } else {
      return lastDayWorldTotalRecovered;
    }
  }

  if (
    currentPopulationIndex === 1
    && currentPeriodIndex === 1
    && currentTerritoryIndex === 0
  ) {

    if (dataType === 0) {
      return lastDayWorldPer100Cases;
    } else if (dataType === 1) {
      return lastDayWorldPer100Deaths;
    } else {
      return lastDayWorldPer100Recovered;
    }

  }
}