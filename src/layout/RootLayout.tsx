import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>navBar</header>

      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default RootLayout;
