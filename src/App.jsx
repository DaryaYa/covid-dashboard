import { useState, useEffect, useCallback } from "react";
import { Header } from "./Components/Header";
import { ListCountries } from "./Components/ListCountries";
import { MapBox } from "./Components/MapBox";
import { ShowTotalCases } from "./Components/ShowTotalCases";
import { ChartBox } from "./Components/ChartBox";
import { ExpansionBlockON } from "./Components/expansionBlock";

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
            <Header></Header>
            <main
                style={{
                    display: "grid",
                    gridTemplateColumns: "auto 55% 27%",
                    gap: "10px",
                }}
            >
                <div
                    id="listBox"
                    onMouseEnter={(e) => ExpansionBlockON(e.target)}
                    style={{
                        overflow: "auto",
                        background: "blueviolet",
                        gridArea: "1/1/3/2",
                    }}
                >
                    <ListCountries
                        countries={data.countries}
                        setCountry={setCountry}
                    />
                </div>
                <MapBox
                    onMouseEnter={(e) => ExpansionBlockON(e.target)}
                ></MapBox>
                <div
                    id="tableBox"
                    onMouseEnter={(e) => ExpansionBlockON(e.target)}
                    style={{
                        backgroundColor: "aquamarine",
                        gridArea: "1/3/2/4",
                    }}
                >
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
