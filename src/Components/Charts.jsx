import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-3";

// const API1 =
//   "https://api.covid19api.com/world?from=2020-06-20T00:00:00Z&to=2020-12-20T00:00:00Z";
// const API2 = 'https://corona-api.com/countries?include=timeline';
const API3 = 'https://disease.sh/v3/covid-19/historical?lastdays=all';

export const Charts = ({ setCountry, currentCountry }) => {
  const [day, setDay] = useState({ days: [] });

  useEffect(() => {
    const fetchData1 = async () => {
      const response = await fetch(API3);
      const result = await response.json();
      console.log(result);
      setDay({ days: result });
    };
    fetchData1();
  }, []);

  let ind;

  if (currentCountry && currentCountry.country) {
    console.log(currentCountry.country);
    ind = day.days.map(el=>el.country).indexOf(currentCountry.country);
    console.log(ind);
  } 
  const [title, setTitle] = useState("NewConfirmed");
  // const labelDates = new Array(day.days.length).fill(1);
  // const dateStamp = day.days.data.map(elem => elem.timeline.map(el=>el.date)).flat();
  //  const totalConfirmed = day.days.data.map((elem) =>
  //    elem.timeline.map((el) => el.confirmed).flat()
  //  );
  //const dateStamp2 = Object.keys(day.days[0].timeline.cases); // ---- timeline
  //const countryValuesTotal = Object.values(day.days[0].timeline.cases); // ---- chart for 1 country

  //const [time, setTime] = useState(Object.keys(day.days[0].timeline.cases));
  //const [info, setInfo] = useState(Object.values(day.days[0].timeline.cases));

  // const getSum = (arr) => {
  //   let prev = 0;
  //   return arr.map((elem) => {
  //     prev += elem;
  //     return prev;
  //   });
  // };

  const data = {
    labels: Object.keys(day.days[ind].timeline.cases),
    datasets: [
      {
        label: "Cases",
        borderColor: "rgba(0,0,0,1)",
        backgroundColor: "darkcyan",
        borderWidth: 2,
        // data: getSum(totalConfirmed),
        data: Object.values(day.days[ind].timeline.cases),
      },
    ],
  };

  return (
    <>
      {/* <p>blablabla</p> */}
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: currentCountry.country,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: true,
          },
          maintainAspectRatio: false,
        }}
      />
      {/* <div>
        <button onClick={() => setTitle("NewDeaths")}>Deaths</button>
        <button onClick={() => setTitle("NewRecovered")}>Recovered</button>
        <button onClick={() => setTitle("NewConfirmed")}>Total cases</button>
      </div> */}
    </>
  );
};

  