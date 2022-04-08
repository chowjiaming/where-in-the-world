import Search from "./Search/Search";
import Countries from "./Countries/Countries";
import "./Main.css"

export default function Main() {
  return (
    <section className="main-content-container">
      <Search />
      <Countries />
    </section>
  );
}
