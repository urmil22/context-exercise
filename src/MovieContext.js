import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$50',
            id: 1
        },
        {
            name: 'Inception',
            price: '$30',
            id: 2
        },
        {
            name: 'Shutter Island',
            price: '$20',
            id: 3
        }
    ]);

    return(
      <MovieContext.Provider value={[movies, setMovies]}> 
       {/* renders all child components */}
        {props.children}   
      </MovieContext.Provider>
    );
}