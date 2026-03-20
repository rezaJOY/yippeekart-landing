import { rootRoutes } from "@/app/router";
import { RouterProvider } from "react-router-dom";
import { Store } from "./store";

const App = () => {
  return (
    <Store>
      <RouterProvider router={rootRoutes()} />
    </Store>
  );
};
export default App;
