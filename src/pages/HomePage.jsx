import Navbar from "../components/Navbar.jsx";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

// Components
import QCM from "../components/Qcm.jsx";

// Styles
import "../styles/HomePage.css";

import chrono from "../assets/chrono.png";
import leaderboard from "../assets/leaderboard.png";

export default function HomePage() {
    const [currentTopic, setCurrentTopic] = useState("food");
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);

    function incrementScore() {
        setScore(score + 1);
    }

    function incrementTotal() {
        setTotal(total + 1);
    }

    return (
        <div>
            <Navbar />
            <div className={"main"}>
                <div className="settings">
                    <NavLink to={"/chrono/"+currentTopic} className="chronoButton">
                        <img src={chrono} className="chronoImage"/>
                    </NavLink>
                    <div className={"topicSelection"}>
                        <button className={currentTopic==="sports" ? "topicButton selected" : "topicButton"} onClick={() => setCurrentTopic("sports")}>Sports</button>
                        <button className={currentTopic==="animals" ? "topicButton selected" : "topicButton"} onClick={() => setCurrentTopic("animals")}>Animals</button>
                        <button className={currentTopic==="food" ? "topicButton selected" : "topicButton"} onClick={() => setCurrentTopic("food")}>Food</button>
                        <button className={currentTopic==="IT" ? "topicButton selected" : "topicButton"} onClick={() => setCurrentTopic("IT")}>IT</button>
                    </div>
                    <NavLink to={"/leaderboard"} className="leaderboardButton">
                        <img src={leaderboard} className="leaderboardImage"/>
                    </NavLink>
                </div>
                
                <QCM topic={currentTopic} score={score} total={total} incrementScore={() => incrementScore()} incrementTotal={() => incrementTotal()}/>
            </div>

        </div>
    );
}