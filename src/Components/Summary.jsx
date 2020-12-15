export const Summary = (props) => {
  return (
    <ul>
      {props.countries.map((country) => (
        <li key={country.CountryCode} onClick={() => props.setCountry(country)}>
          <p>{country.Country}</p>
        </li>
      ))}
    </ul>
  );
};
