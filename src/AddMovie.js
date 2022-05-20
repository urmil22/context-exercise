import React, {useState, useContext} from 'react'
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = (e) =>{
     e.preventDefault();
     //here we have access to latest updated movies
     setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    }
  return (
     <form onSubmit={addMovie}>
        <input placeholder='Enter movie name...'
        type='text' value={name} onChange={updateName} name='name' />
        <input placeholder='Enter movie price...'
        type='text' value={price} onChange={updatePrice} name='price' />
        <button>Submit</button>
        
    </form>
  );
}

export default AddMovie