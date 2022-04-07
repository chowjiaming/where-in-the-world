import { Fragment } from "react";
import Search from "./Search/Search";
import Countries from "./Countries/Countries";

export default function Main() {
  return (
    <Fragment>
      <Search />
      <Countries />
    </Fragment>
  );
}
