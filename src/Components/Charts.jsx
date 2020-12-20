import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-3";

// const API1 =
//   "https://api.covid19api.com/world?from=2020-06-20T00:00:00Z&to=2020-12-20T00:00:00Z";
const API2 = 'https://corona-api.com/countries?include=timeline';

export const Charts = () => {

const [day, setDay] = useState({days:[]});

   useEffect(() => {
     const fetchData1 = async () => {
       const response = await fetch(API2);
       const result = await response.json();
       console.log(result);
       setDay({days:result});
    
     };
     fetchData1();
   }, []);

   const [title, setTitle] = useState("NewConfirmed");
  // const labelDates = new Array(day.days.length).fill(1);
  const dateStamp = day.days.data.map(elem => elem.timeline.map(el=>el.date)).flat();
   const totalConfirmed = day.days.data.map((elem) =>
     elem.timeline.map((el) => el.confirmed).flat()
   );

  // const getSum = (arr) => {
  //   let prev = 0;
  //   return arr.map((elem) => {
  //     prev += elem;
  //     return prev;
  //   });
  // };

  const data = {
    labels: dateStamp,
    datasets: [
      {
        label: "Cases",
        borderColor: "rgba(0,0,0,1)",
        backgroundColor: "darkcyan",
        borderWidth: 2,
        // data: getSum(totalConfirmed),
        data: totalConfirmed,
      },
    ],
  };
   

  return (
    <div>
     <p>blablabla</p>
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: title,
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
    </div> 
  );
}

  