import React from "react";
import Navbar from "../components/Navbar.jsx";

// Components

// Styles
import "../styles/LeaderboardPage.css";


export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = React.useState(JSON.parse(localStorage.getItem("leaderboard")) || []);
    const leaderboardWithRank = leaderboard.map((item, index) => {
        return {
            ...item,
            rank: index + 1
        };
    });

    const renderRows = () => {
        return leaderboardWithRank.map(({id, rank, nickname, score}) => {
            return (
                <tr key={id}>
                    <td>{rank}</td>
                    <td>{nickname}</td>
                    <td>{score}</td>
                </tr>
            );
        });
    };


    return (
        <div>
            <Navbar />
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Nickname</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
}