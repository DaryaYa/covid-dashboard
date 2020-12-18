import React from "react";
import styles from "./ListCountries.module.scss";

export const ListCountries = ({ countries, title, setTitle }) => {
  // state = {
  //   text: "cases",
  // };

  // onClickRecovered = () => {
  //   this.setState({
  //     text: "recovered",
  //   });
  // };

  // onClickDeaths = () => {
  //   this.setState({
  //     text: "deaths",
  //   });
  // };

  function sortByTotal(arr, x) {
    arr.sort((a, b) => b[x] - a[x]);
    return arr;
  }

  // newCountries = [];
  // newCountries = this.sortByTotal(this.props.countries, "cases");

  // render() {

   
    return (
      <div>
        <div className={styles.buttons}>
          <button onClick={() => setTitle("deaths")}>Deaths</button>
        <button onClick={() => setTitle("recovered")}>Recovered</button>
        <button onClick={() => setTitle("cases")}>Total cases</button>
        </div>
        
        <ul>
          {sortByTotal(countries, title).map((country, index) => (
            <li
              className={styles.li}
              // key={country.countryInfo._id}
              key={index}
              // onClick={() => this.setCountry(country)}
            >
              <p>
                <span className={styles.info}>
                  {country[title]}
                  {/* {this.state.text} */}
                </span>
                <span>{country.country}</span>
                <img
                  className={styles.img}
                  src={country.countryInfo.flag}
                  alt="flag"
                />
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
// };
