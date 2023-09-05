        import { useState } from "react";
        export default function Scoreboard() {
            const [player, setPlayer] = useState({
            firstName: "Ranjani",
            lastName: "Shettar",
            score: 10,
            });
            function handlePlusClick() {
                //player.score++;
                //the bug here because the number depends on previouse value to increase
                setPlayer((prev=>({//this is the solution (previouse value)
                    ...prev,
                    score:player.score++ 
                })))
            }
            function handleFirstNameChange(e) {
                setPlayer({
                ...player,
                firstName: e.target.value,
                });
            }
            //the bug here because it didnt take all attributes in the state object.
            function handleLastNameChange(e) {
                setPlayer({
                    ...player,//this is the solution (spread)
                lastName: e.target.value,
            });



            }
            return (
                <div >
                <label>
                    Score: <b>{player.score}</b>{" "}
                    <button onClick={handlePlusClick}>+1</button>
                </label><br/>
                <label>
                    First name:
                    <input value={player.firstName} onChange={handleFirstNameChange} />
                </label><br/>
                <label>
                    Last name:
                    <input value={player.lastName} onChange={handleLastNameChange} />
                </label>
                </div>
            );
        }