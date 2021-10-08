// Write your Character component here

function Character (props) {

    const { characters } = props

    return (
        <div>
            <h3>Characters Name = {characters.name}</h3>
        </div>
    )
}

export default Character