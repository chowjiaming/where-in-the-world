import Border from "./Border/Border";
import "./Borders.css";

export default function Borders(props) {
  const { borders } = props;
  const borderContent = borders.map((countryCode) => {
    return <Border key={countryCode} countryCode={countryCode} />
  });
  return <div className="border-country-container">{borderContent}</div>;
}
