import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

const RootLayout = () => {
  return (
    <>
      <header><MainHeader/></header>

      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default RootLayout;
