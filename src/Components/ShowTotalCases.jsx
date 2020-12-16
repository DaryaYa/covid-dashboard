export const ShowTotalCases = (props) => {
  return (
    <div className="total-cases">
      <p>Total Cases</p>
      <p>{props.currentCountryTotalConfirmed}</p>
    </div>
  );
};
