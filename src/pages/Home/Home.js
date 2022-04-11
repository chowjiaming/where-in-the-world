import Search from "../../components/Search/Search";
import Countries from "../../components/Countries/Countries";
import "./Home.css";

export default function Home() {
  return (
    <main className="container__content--main">
      <Search />
      <Countries />
    </main>
  );
}
