import { useState, useEffect, useCallback } from "react";
import { Header } from "./Components/Header";
import { ListCountries } from "./Components/ListCountries";
import { MapBox } from "./Components/MapBox";
import { ShowTotalCases } from "./Components/ShowTotalCases";
import { ChartBox } from "./Components/ChartBox";

import styles from "./app.module.scss";

// const API = "https://api.covid19api.com/summary";
const API = "https://corona.lmao.ninja/v2/countries";

function App() {
    const [data, setData] = useState({ countries: [] });
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API);
            const result = await response.json();
            setData({ result });
        };

        fetchData();
    }, []);
    console.log("data", data);

    const [currentCountry, setCurrentCountry] = useState(null);

    const setCountry = useCallback((currentCountry) => {
        setCurrentCountry(currentCountry);
    }, []);
    //
    //
    //
    return (
        <div className="App">
            <header className="App-header">
                <Header />
            </header>
            <main className={styles.main}>
                <div className={styles.listCountriesWrapper}>
                    <section className="country-list">
                        {/* <ListCountries
                            countries={data}
                            setCountry={setCountry}
                        /> */}
                    </section>
                </div>
                <MapBox countriesInfo={data}></MapBox>
                <div className={styles.showTotalCasesWrapper}>
                    {currentCountry && (
                        <ShowTotalCases
                            currentCountryTotalConfirmed={
                                currentCountry.TotalConfirmed
                            }
                        ></ShowTotalCases>
                    )}
                </div>
                <ChartBox></ChartBox>
            </main>
        </div>
    );
}

export default App;
