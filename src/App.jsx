import { useRef } from 'react';
import './App.css'

export default function App() {
  const movies = [
    { id: 1, name: "O Poderoso Chefão" },
    { id: 2, name: "A Lista de Schindler" },
    { id: 3, name: "O Senhor dos Anéis: O Retorno do Rei" },
    { id: 4, name: "Pulp Fiction: Tempo de Violência" },
    { id: 5, name: "O Clube da Luta" },
    { id: 6, name: "Interestelar" },
    { id: 7, name: "A Origem" },
    { id: 8, name: "Cidade de Deus" },
    { id: 9, name: "O Silêncio dos Inocentes" },
    { id: 10, name: "Clube dos Cinco" }
  ];

  const inputRef = useRef(null)

  function searchMovie() {
    if(!inputRef.current.value.trim()) {
      return
    }

    const moviesLi = document.querySelectorAll('li')

    for (const movie of moviesLi) {
      if(movie.textContent.toLowerCase().includes(inputRef.current.value.toLowerCase())) {
        movie.style.display ='block'
        continue
      }

      movie.style.display='none'
    }
  }

  function resetSearch() {
    const moviesLi = document.querySelectorAll('li')

    for (const movie of moviesLi) {
      movie.style.display ='block'
    }

    inputRef.current.value = ''
  }

  return (
    <div className='container'>
      <div>
        <input 
        type="text" 
        placeholder='Buscar'
        ref={inputRef}
        />
        <button onClick={searchMovie}>Buscar</button>
        <button onClick={resetSearch}>Limpar</button>
      </div>

      <ul>
        {movies.map((movie) => (
          <li key={movie.key}>{movie.name}</li>
        ))}
      </ul>
    </div>
  )
}

