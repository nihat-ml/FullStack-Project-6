import { createContext, useEffect, useState } from "react";

export const favoritesContext = createContext()

function FavoritesProvider ({children}){
    const localFavorite = JSON.parse(localStorage.getItem("favorites")) || []
    const [favorites, setFavorites] = useState(localFavorite) 

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites])

    const value ={
        favorites,
        setFavorites
    }
    return (
        <favoritesContext.Provider value={value}>
            {children}
        </favoritesContext.Provider>
    )
}


export default FavoritesProvider