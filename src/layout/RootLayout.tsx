import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FooterUnderPage from "./FooterUnderPage";

const RootLayout = () => {
  return (
    <>
      <header>
        <MainHeader/>
        <NavBar/>
        </header>

      <main className="">
        <Outlet />
      </main>
     <Footer/>
     <FooterUnderPage/>
     </>
  );
};

export default RootLayout;
