import { useState, useEffect, useCallback } from "react";
import { Header } from "./Components/Header";
import { Summary } from "./Components/Summary";
import { ShowTotalCases } from "./Components/ShowTotalCases";
import { TableBox } from "./Components/tableBox/TableBox";

const API = "https://api.covid19api.com/summary";
const countriesAPI ='https://restcountries.eu/rest/v2/all?fields=name;population;flag';

function App() {

  const dataCategories = {
    dataType: ["Cases", "Deaths", "Recovered"],
    period: ['For all time', 'For the last day'],
    territory: ['World', 'Country'],
    population: ['Total', 'Per 100,000 population'],
  }

  const [currentPeriodIndex, setCurrentPeriodIndex] =  useState(0);
  const [currentTerritoryIndex, setCurrentTerritoryIndex] =  useState(0);
  const [currentPopulationIndex, setCurrentPopulationIndex] =  useState(0);

 function changeCategoryStatus(currentStatus) {
   return currentStatus === 0 ? 1 : 0
 }

 const [data, setData] = useState({
    countries: [],
    global: {},
   });

  // console.log('data', data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const result = await response.json();
      // console.log(result);
      setData({
        countries: result.Countries,
        global: result.Global,
       });
    };

    fetchData();
  }, []);

  const [populationData, setPopulationData] = useState({
    population: []
   });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(countriesAPI);
      const result = await response.json();
      setPopulationData({
        population: result,
       });
    };

    fetchData();
  }, []);

  const [currentCountry, setCurrentCountry] = useState(null);

  const setCountry = useCallback((currentCountry) => {
    setCurrentCountry(currentCountry);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {currentCountry && (
        <ShowTotalCases
          currentCountryTotalConfirmed={currentCountry.TotalConfirmed}
        ></ShowTotalCases>
      )}
      <Summary countries={data.countries} setCountry={setCountry} />
      <TableBox
        dataCategories = {dataCategories}
        populationPerCountry={populationData.population}

        currentPopulationIndex={currentPopulationIndex}
        setCurrentPopulationIndex={setCurrentPopulationIndex}

        currentTerritoryIndex={currentTerritoryIndex}
        setCurrentTerritoryIndex={setCurrentTerritoryIndex}

        currentPeriodIndex={currentPeriodIndex}
        setCurrentPeriodIndex={setCurrentPeriodIndex}

        changeCategoryStatus={changeCategoryStatus}
        countries={data.countries}
        global={data.global}
        setCountry={setCountry}
      />
    </div>
  );
}

export default App;
