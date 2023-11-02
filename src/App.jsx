import Navbar from "./components/Navbar";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import MoviePage from "./pages/MoviePage";

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
          path: "movies/:genre_name",
          element: <Movies />,
        },
        {
          path: "tv/:genre_name",
          element: <TvShows />,
        },
        {
          path: "movie/:title",
          element: <MoviePage />,
        },
        {
          path: "tv/:title",
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
