import { useState, useEffect, useCallback } from "react";
import { Header } from "./Components/Header";
import { Summary } from "./Components/Summary";
import { ShowTotalCases } from "./Components/ShowTotalCases";
import { TableBox } from "./Components/tableBox/TableBox";

const API = "https://api.covid19api.com/summary";

function App() {
  const dataTypes = ["Cases", "Deaths", "Recovered"];

  const dataCategories = {
    period: ['For all time', 'For the last day'],
    territory: ['World', 'Country'],
    population: ['Total', 'Per 100,000 population'],
  }
  const [curentCategories, setCurrentCategories] = useState({
      period: dataCategories.period[0],
      territory: dataCategories.territory[0],
      population: dataCategories.population[0],
    }
  )

  function changePopulationStatus(categoryStatus) {

    if (dataCategories.population.indexOf(categoryStatus) === 0) {
      curentCategories.population  = dataCategories.population[1]
    } else {
      curentCategories.population  = dataCategories.population[0]
    }

    setCurrentCategories(curentCategories);
  }

  const [data, setData] = useState({ countries: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const result = await response.json();
      // console.log(result);
      setData({ countries: result.Countries });
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
        changePopulationStatus={changePopulationStatus}
        curentCategories={curentCategories}
        countries={data.countries}
        setCountry={setCountry}
        dataTypes={dataTypes}
      />
    </div>
  );
}

export default App;
