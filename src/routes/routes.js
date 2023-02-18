import AllMeetupsPage from "../pages/AllMeetups";
import FavoritesPage from "../pages/Favorites";
import NewMeetupPage from "../pages/NewMeetup";

const routes = [
  {
    path: "/",
    element: <AllMeetupsPage />,
  },
  {
    path: "/new-meetup",
    element: <NewMeetupPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
];

export default routes;
