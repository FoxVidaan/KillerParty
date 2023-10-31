import { useState } from "react"
import { useLocation } from "react-router-dom";

function Game() {
    const [index, setIndex] = useState(0);
    const state = useLocation();
    const player = state.state;
    console.log(index > player.challenges.length);

    return (
        <>
            <h1 className="playerName">{player.name}</h1>
            <div>
                <img src={player.challenges[index].icon} alt="" />
                <h2>{player.challenges[index].title}</h2>
                <p>{player.challenges[index].description}</p>
            </div>
            <div>
                <button className="previous" onClick={() => index > 0 ? setIndex(index-1) : ""}>Précedent</button>
                <button className="next" onClick={() => index < player.challenges.length-1 ? setIndex(index + 1) : ""}>Suivant</button>
            </div>
        </>
    )
}

export default Game
