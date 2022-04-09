import Search from "../../components/Search/Search";
import Countries from "../../components/Countries/Countries";
import "./Home.css";

export default function Home() {
  return (
    <section className="container__content--main">
      <Search />
      <Countries />
    </section>
  );
}
