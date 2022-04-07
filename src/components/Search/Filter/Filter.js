import "./Filter.css";

export default function Filter() {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const options = regions.map((region) => {
    return (
      <option value={region} key={region}>
        {region}
      </option>
    );
  });

  return (
    <div className="dropdown-container">
      <select className="region-select-dropdown">
        <option value={""}>Filter by Region</option>
        {options}
      </select>
    </div>
  );
}
