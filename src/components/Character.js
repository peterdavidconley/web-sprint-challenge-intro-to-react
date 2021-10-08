// Write your Character component here

import styled from 'styled-components'

const StyledCharacter = styled.div`

    margin: 2%;
    padding: 2%;
    border: purple 2px solid;
    display: flex;
    justify-content: space-around;

    p {
        font-size: 1rem;
    }

    #button {
        display: flex;
        align-items: center;
    }

    a {
        color: purple;
    }

    button {
        padding: 4%;
        font-size: 1.5rem;
        background-color: purple;
        color: white;
    }

`

const StyledFilms = styled.div`

    margin: 2%;
    padding: 5%;
    background-color: purple;
    border: white 2px solid;

    p {
        font-size: 1rem;
    }

`


function toggleFilms () {
    const filmsDiv = document.querySelector('.films')
    filmsDiv.classList.toggle('off')
}

function Character (props) {

    const { character, url, films } = props

    console.log(character)

    return (
        <div>
        <StyledCharacter>
            <div>
            <h3>{character}</h3>
            <p>Profile: <a href={url}>{url}</a></p>
            </div>
            <div id='button'>
            <button onClick={toggleFilms}>Show Films</button>
            </div>
        </StyledCharacter>
        <StyledFilms className='films off'>
                <center><h4>Appeared In:</h4></center>
                { films.map(film => <p>{film}</p>)}
        </StyledFilms>
        </div> 
        
    )
}

export default Character