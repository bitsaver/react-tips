import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.title}>React Meetups</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">NewMeetup</Link>
          </li>
          <li>
            <Link to="/management">Management</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite<span className={classes.favoriteCount}>{favoritesCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
