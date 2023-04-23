import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import db from './Firebase.js';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import './BlogList.css'
import { AiOutlineLike } from 'react-icons/ai';

function BlogList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '664874e800msh115933a969010c0p1cb578jsn139cbec4ecc5',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setMovies(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  const addToFavorites = async (movieId) => {

    try {
      const docRef = await addDoc(collection(db, "favorites"), {
        movieId: movieId,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className='bloglist'>
      <h1>IMDB Top 100 Movies</h1>
      <ul>
        {movies.map(movie => (
          <div className='container'>
            <li key={movie.id}>
              <div className='topNumber'>
                <p>{movie.rank}</p>
              </div>
              <img src={movie.image} alt={movie.title} />
              <div className='titulo'>
                <Link to={`/blogpost/${movie.id}`}>{movie.title}</Link>
                <AiOutlineLike className='fav' onClick={() => addToFavorites(movie.id)} />
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;