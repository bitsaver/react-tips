import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";

function MeetupItem(props) {
    const favorites = useContext(FavoritesContext);
    const isFavorites = favorites.itemIsFavorite(props.id);

    function toggleFavoriteHandler() {
        if (isFavorites) {
            favorites.removeFavorite(props.id)
        } else {
            favorites.addFavorite({
                id: props.id,
                image: props.image,
                address: props.address,
                description: props.description,
                title: props.title,
            })
        }
    }


    return (
        <li id={props.id}>
            <Card>
                <img className={classes.img} alt="loading..." src={props.image}></img>
                <h3><span>{props.id}</span>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
                <button onClick={toggleFavoriteHandler} className={isFavorites?classes.remove_button:classes.add_button}>{isFavorites?'Remove from favorites':'Add to favorites'}</button>
            </Card>
        </li>
    );
}

export default MeetupItem;
