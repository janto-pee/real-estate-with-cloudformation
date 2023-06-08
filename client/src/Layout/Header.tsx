import { Fragment } from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

function Header() {
  return (
    <Fragment>
      <Navbar />
      <TopBar />
    </Fragment>
  );
}

export default Header;
