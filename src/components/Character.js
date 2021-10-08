// Write your Character component here

import styled from 'styled-components'

const StyledCharacter = styled.div`

    margin: 2%;
    padding: 2%;
    border: purple 2px solid;

`

function Character (props) {

    const { character } = props

    console.log(character)

    return (
        <StyledCharacter>
            <h3>{character}</h3>
        </StyledCharacter>
    )
}

export default Character