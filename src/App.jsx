import { useState, useEffect, useCallback } from "react";
import { Header } from "./Components/Header";
import { Summary } from "./Components/Summary";
import { ShowTotalCases } from "./Components/ShowTotalCases";

const API = "https://api.covid19api.com/summary";

function App() {
  const [data, setData] = useState({ countries: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const result = await response.json();
      console.log(result);
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
    </div>
  );
}

export default App;
