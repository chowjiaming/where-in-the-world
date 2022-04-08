import "./Borders.css";

export default function Borders(props) {
  const { borders } = props;
  const borderContent = borders.map((countryCode) => {
    return (
      <div key={countryCode} className="border-country-button">
        {countryCode}
      </div>
    );
  });
  return <div className="border-country-container">{borderContent}</div>;
}
