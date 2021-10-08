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

function Character (props) {

    const { character, url } = props

    console.log(character)

    return (
        <StyledCharacter>
            <div>
            <h3>{character}</h3>
            <p>Profile: <a href={url}>{url}</a></p>
            </div>
            <div id='button'>
            <button>Details</button>
            </div>
        </StyledCharacter>
    )
}

export default Character