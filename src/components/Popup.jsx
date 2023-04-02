import React from "react";
import {NavLink} from "react-router-dom";

//Styles
import "../styles/Popup.css";

export default function Popup(props) {
    const [nickname, setNickname] = React.useState("");

    const addLeaderboardEntry = (nickname, score) => {
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
        const id = leaderboard.length;
        leaderboard.push({id, nickname, score});
        leaderboard = leaderboard.sort((a, b) => b.score - a.score);
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        console.log(leaderboard);
    };

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>Time's Up !</h1>
                <div className="score">Your score is {props.score}</div>
                <input type="text" placeholder="Nickname" onChange={() => {setNickname(document.getElementsByTagName("input")[0].value); console.log(nickname)}}/>
                <NavLink to="/" className="homeButton" onClick={() => {addLeaderboardEntry(nickname, props.score)}}>Home</NavLink>
            </div>
        </div>
    );
};