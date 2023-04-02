import Navbar from "../components/Navbar.jsx";
import React, {useState} from "react";

// Components
import QCM from "../components/Qcm.jsx";
import Chrono from "../components/Chrono.jsx";

// Styles
import "../styles/ChronoPage.css";


export default function ChronoPage() {
    const [currentTopic, setCurrentTopic] = useState("food");

    return (
        <div>
            <Navbar />
            <div className={"main"}>
                <Chrono />
                <QCM topic={currentTopic}/>
            </div>

        </div>
    );
}