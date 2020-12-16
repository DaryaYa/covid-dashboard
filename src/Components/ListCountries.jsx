export const ListCountries = (props) => {
    return (
        <ul style={{ maxHeight: "550px" }}>
            {props.countries.map((country) => (
                <li
                    key={country.CountryCode}
                    onClick={() => props.setCountry(country)}
                >
                    <p>{country.Country}</p>
                </li>
            ))}
        </ul>
    );
};
