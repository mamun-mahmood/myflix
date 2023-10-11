import Navbar from "./components/Navbar";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

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
        {
          path: "movies/:genre_id",
          element: <Movies />,
        },
        {
          path: "tv/:genre_id",
          element: <TvShows />,
        },
        {
          path: "people",
          element: <Landing />,
        },
        {
          path: "more",
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
