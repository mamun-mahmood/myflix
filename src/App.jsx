import Navbar from "./components/Navbar";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import TvShows from "./pages/TvShows";
import MoviePage from "./pages/MoviePage";
import { lazy, Suspense } from "react";
const Movies = lazy(() => import("./pages/Movies"));


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
          path: "movies/:id",
          element: <Suspense fallback={<div>Loading...</div>}><Movies /></Suspense>,
        },
        {
          path: "tv/:id",
          element: <TvShows />,
        },
        {
          path: "movie/:id",
          element: <MoviePage />,
        },
        {
          path: "tv/:id",
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
