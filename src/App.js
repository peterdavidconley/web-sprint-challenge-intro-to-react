import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const StyledApp = styled.div`

h1 {
  color: purple;
  text-align: center;
  text-shadow: 1px 1px 5px #fff;
  font-size: 3rem; }
`

const StyledCharacters = styled.div`

  margin: 5%;
  padding: 5%;
  background-color: black;
  color: white;
  font-size: 2rem;

`

const App = () => {

  const [ sWCharacters, setSWCharacters ] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then( res => {
      setSWCharacters(res.data)
    })
    .catch( err => {
      console.error(err)
    })
  },[])

  console.log(sWCharacters)

  return (
    <StyledApp>
      <h1>Star Wars Characters</h1>
      <StyledCharacters>
        {sWCharacters.map( character => <Character key={character.birth_year} character={character.name} url={character.url}/>)}
      </StyledCharacters>
    </StyledApp>
  );
}

export default App;
