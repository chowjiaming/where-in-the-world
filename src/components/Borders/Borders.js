import Border from "./Border/Border";
import "./Borders.css";

export default function Borders(props) {
  const { borders } = props;
  const borderContent = borders.map((countryCode) => {
    return <Border key={countryCode} countryCode={countryCode} />;
  });
  return (
    <div className="borders-container">
      <h3 className="border-countries-title">Border Countries:</h3>
      <div className="border-box">{borderContent}</div>
    </div>
  );
}