import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavBar from "./NavBar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <header>
        <MainHeader/>
        <NavBar/>
        </header>

      <main className="h-screen">
        <Outlet />
      </main>
     <Footer/>
     </>
  );
};

export default RootLayout;
