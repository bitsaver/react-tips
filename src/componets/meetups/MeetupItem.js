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
        <li id={props.id} className={classes.item}>
            <Card>
                <div className={classes.img}>
                    <img className={classes.img} alt="loading..." src={props.image}></img>
                </div>
                <div className={classes.text}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.button}>
                    <button type="button" onClick={toggleFavoriteHandler}
                            className={isFavorites ? classes.remove_button : classes.add_button}>{isFavorites ? 'Remove from favorites' : 'Add to favorites'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
