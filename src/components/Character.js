// Write your Character component here

function Character (props) {

    const { character } = props

    console.log(character)

    return (
        <div>
            <h3>{character}</h3>
        </div>
    )
}

export default Character