import AllMeetupsPage from "../pages/AllMeetups";
import FavoritesPage from "../pages/Favorites";
import NewMeetupPage from "../pages/NewMeetup";
import ManagementPage from "../pages/Management";

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
    path: "/management",
    element: <ManagementPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
];

export default routes;
