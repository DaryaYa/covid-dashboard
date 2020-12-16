import { useState, useEffect, useCallback } from "react";
import { Header } from "./Components/Header";
import { Summary } from "./Components/Summary";
import { ShowTotalCases } from "./Components/ShowTotalCases";
import { TableBox } from "./Components/tableBox/TableBox.module";

const API = "https://api.covid19api.com/summary";

function App() {
  const dataTypes = ["Cases", "Deaths", "Recovered"];

  const [dataCategoriesShown, setDataCategotiesShown] = useState({
    world: { id: 1, isShown: true, title: "World" },
    country: { id: 2, isShown: false, title: "Country" },
    forAllTime: { id: 3, isShown: true, title: "For all time" },
    forLastDay: { id: 4, isShown: false, title: "For the last day" },
    total: { id: 5, isShown: true, title: "Total" },
    perHundredThousandPopulation: {
      id: 6,
      isShown: false,
      title: "Per 100,000 population",
    },
  });

  function changeDataCategoriesShown(categoryId) {
    setDataCategotiesShown((dataCategoriesShown) => {
      for (let dataCategory in dataCategoriesShown) {
        let property = dataCategoriesShown[dataCategory];

        if (property.id === categoryId) {
          property.isShown = !property.isShown;
        }
      }
      // console.log(dataCategoriesShown.total.isShown);
      return dataCategoriesShown;
    });
    // console.log(dataCategoriesShown.total.isShown);
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
        onChange={changeDataCategoriesShown}
        dataCategoriesShown={dataCategoriesShown}
        countries={data.countries}
        setCountry={setCountry}
        dataTypes={dataTypes}
      />
    </div>
  );
}

export default App;
