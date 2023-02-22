import {createContext, useState} from 'react'

/*
* How do you manage value globally with context?
* Solution:
*   1. using createContext("value") that is provided by react to get MyContext
*   2. create a MyContext.Provider component that wraps our content,
*   3. using useState() to update the component's value
*       also passing a object reference that includes our value and method to its children.
*   4. using useContext(Context) to get the object reference.
*
* */

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: meetup => [],
    removeFavorite: meetupId => [],
    itemIsFavorite: meetupId => false
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoritesMeetup) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.concat(favoritesMeetup)
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;