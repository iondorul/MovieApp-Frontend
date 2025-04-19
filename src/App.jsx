import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5203/api/movies/latest")
      .then(res => {
        console.log("Filme primite:", res.data);
        setMovies(res.data);
      })
      .catch(err => {
        console.error("Eroare la conectare:", err);
        alert("Eroare la conectare cu backend-ul!");
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎬 Lista de filme</h1>
      {movies.length === 0 ? (
        <p>Nu s-au găsit filme.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {movies.map(movie => (
            <li key={movie.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
              <img src={movie.imageUrl} alt={movie.title} width="150" />
              <h3>{movie.title} ({movie.genre})</h3>
              <p>{movie.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
