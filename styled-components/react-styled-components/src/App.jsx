import Navbar from "./components/Navbar";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <Landing />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
