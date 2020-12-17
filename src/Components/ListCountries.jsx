import styles from "./ListCountries.module.css";

export const ListCountries = (props) => {
    function sortByTotal(arr) {
        arr.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    }
    sortByTotal(props.countries);

    return (
        <ul style={{ maxHeight: "550px" }}>
            {props.countries.map((country) => (
                <li
                    className={styles.li}
                    key={country.CountryCode}
                    onClick={() => props.setCountry(country)}
                >
                    <p>
                        <span className={styles.info}>
                            {country.TotalConfirmed}
                        </span>
                        <span>{country.Country}</span>
                    </p>
                </li>
            ))}
        </ul>
    );
};
