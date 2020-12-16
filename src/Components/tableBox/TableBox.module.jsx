import "./TableBox.css";

export const TableBox = (props) => {
  console.log("total isshown:", props.dataCategoriesShown.total.isShown);
  console.log("per 100 isshown:", props.dataCategoriesShown.perHundredThousandPopulation.isShown);
  return (
    <div className="table-box">
      <div className="data-volume">
        <span
          onClick={() => {
            console.log('click');
            props.onChange(props.dataCategoriesShown.total.id);
            props.onChange(
              props.dataCategoriesShown.perHundredThousandPopulation.id
            );
          }}
        >
          { props.dataCategoriesShown.total.isShown
            ? props.dataCategoriesShown.total.title
            : props.dataCategoriesShown.perHundredThousandPopulation.title }
        </span>
      </div>
      <table className="table" border="2" width="25%" cellSpacing="0">
        <thead>
          <tr>
            {props.dataTypes.map((element, index) => {
              return <th key={index}>{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100</td>
            {/* Dinamic */}
            <td>50</td>
            {/* Dinamic */}
            <td>40</td>
            {/* Dinamic */}
            <td>
              {props.dataCategoriesShown.forAllTime.isShown
                ? props.dataCategoriesShown.forAllTime.title
                : props.dataCategoriesShown.forLastDay.title}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="country-world">
        <span>
          {props.dataCategoriesShown.world.isShown
            ? props.dataCategoriesShown.world.title
            : props.dataCategoriesShown.country.title}
        </span>
      </div>
    </div>
  );
};

// export const Summary = (props) => {
//   return (
//     <ul>
//       {props.countries.map((country) => (
//         <li key={country.CountryCode} onClick={() => props.setCountry(country)}>
//           <p>{country.Country}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };
