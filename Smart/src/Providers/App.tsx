import { RouterProvider } from "react-router-dom";
import router from "../Routes/App.routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
