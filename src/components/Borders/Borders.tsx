import Border from './Border/Border';
import './Borders.css';

type BordersProps = {
  borders: string[];
};

const Borders: React.FC<BordersProps> = ({ borders }) => {
  const borderContent = borders.map((countryCode) => {
    return <Border key={countryCode} countryCode={countryCode} />;
  });
  return (
    <div className="container__borders">
      <h3 className="border__title">Border Countries:</h3>
      <div className="box__border">{borderContent}</div>
    </div>
  );
};

export default Borders;
