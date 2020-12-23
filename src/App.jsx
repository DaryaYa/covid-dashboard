import { useState, useEffect, useCallback } from "react";
import { Header } from "./Components/Header";
import ListCountries from "./Components/ListCountries";
import { MapBox } from "./Components/MapBox";
import { ChartBox } from "./Components/ChartBox";
import TableBox from './Components/tableBox/TableBox';

import styles from "./app.module.scss";

// const API = "https://api.covid19api.com/summary";
const API = "https://corona.lmao.ninja/v2/countries";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const dataCategories = {
    dataType: ['Cases', 'Deaths', 'Recovered'],
    period: ['For all time', 'For the last day'],
    territory: ['World', 'Country'],
    population: ['Total', 'Per 100,000 population'],
  };

  const [currentPeriodIndex, setCurrentPeriodIndex] = useState(0);
  const [currentTerritoryIndex, setCurrentTerritoryIndex] = useState(0);
  const [currentPopulationIndex, setCurrentPopulationIndex] = useState(0);

  function changeCategoryStatus(currentStatus) {
    return currentStatus === 0 ? 1 : 0;
  }

  const [data, setData] = useState({ countries: [] });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const result = await response.json();
      // console.log(result);
      setData({ countries: result });
    };

    fetchData();
  }, []);

  const [currentCountry, setCurrentCountry] = useState(null);

  const setCountry = useCallback((currentCountry) => {
    setCurrentCountry(currentCountry);
  }, []);

  const [title, setTitle] = useState("cases");

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className={styles.main}>
        <div className={styles.listCountriesWrapper}>
          <section className="country-list">
          <ListCountries
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                countries={data.countries}
                setCountry={setCountry}
                title={title}
                setTitle={setTitle}
              />
          </section>
        </div>
        <MapBox countriesInfo={data.countries}></MapBox>
        <div className={styles.showTotalCasesWrapper}>
          <TableBox
            currentCountry={currentCountry}
            dataCategories={dataCategories}
            currentPopulationIndex={currentPopulationIndex}
            setCurrentPopulationIndex={setCurrentPopulationIndex}
            currentTerritoryIndex={currentTerritoryIndex}
            setCurrentTerritoryIndex={setCurrentTerritoryIndex}
            currentPeriodIndex={currentPeriodIndex}
            setCurrentPeriodIndex={setCurrentPeriodIndex}
            changeCategoryStatus={changeCategoryStatus}
            countries={data.countries}
            setCountry={setCountry}
          />
        </div>
        <ChartBox></ChartBox>
      </main>
    </div>
  );
}

export default App;
