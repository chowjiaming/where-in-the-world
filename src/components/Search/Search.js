// import Filter from "./Filter/Filter";
import "./Search.css";

export default function Search() {
  return (
    <section className="search-container">
      <img
        className="magnifying-glass"
        src="images/search.svg"
        alt="magnifying-glass"
      />
      <input className="search-box" placeholder="Search for a country..." />
      {/* <Filter /> */}
    </section>
  );
}
