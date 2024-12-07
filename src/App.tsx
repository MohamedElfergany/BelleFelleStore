import { RouterProvider } from "react-router-dom";
import AppRoute from "./routes/AppRoute";

const App = () => {
  return (
    <>
      <RouterProvider router={AppRoute} />
    </>
  );
};

export default App;
