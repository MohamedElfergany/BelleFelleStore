import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <>
      <header>
        <MainHeader/>
        <NavBar/>
        </header>

      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default RootLayout;
