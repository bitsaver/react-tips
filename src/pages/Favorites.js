import FavoritesContext from "../componets/store/favorites-context"
import {useContext} from "react";
import MeetupList from "../componets/meetups/MeetupList";
import aclasses from "./AllMeetups.module.css"

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);

    let content;
    if (favoritesContext.totalFavorites === 0) {
        content = <p>You don't have any favorite yet, try add some?</p>;
    } else {
        content = <MeetupList data={favoritesContext.favorites}/>;
    }

    return (
        <section className={aclasses.section}>
            <div>
                <h1 className={aclasses.title}>My Favorite Meetups</h1>
            {content}
            </div>
        </section>
    );
}

export default FavoritesPage;
