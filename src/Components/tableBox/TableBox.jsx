import styles from "./TableBox.module.scss";

export const TableBox = (props) => {
  return (
    <div className={styles.tableBox}>
      <div>
        <span
          onClick={() => {
            console.log("click");
            props.changePopulationStatus(props.curentCategories.population);
            console.log(props.curentCategories);
          }}
        >
          {props.curentCategories.population}
        </span>
      </div>
      <table border="2" width="25%" cellSpacing="0">
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
            <td>{props.curentCategories.period}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <span>{props.curentCategories.territory}</span>
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
