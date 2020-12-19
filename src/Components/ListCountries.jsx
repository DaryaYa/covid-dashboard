import styles from "./ListCountries.module.css";

export const ListCountries = (props) => {
    function sortByTotal(arr) {
        arr.sort((a, b) => b.cases - a.cases);
    }
    sortByTotal(props.countries);

    return (
        <ul style={{ maxHeight: "550px" }}>
            {props.countries.map((country) => (
                <li
                    className={styles.li}
                    key={country.countryInfo._id}
                    onClick={() => props.setCountry(country)}
                >
                    <p>
                        <span className={styles.info}>{country.cases}</span>
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
    );
};
