import Navbar from "../components/Navbar.jsx";
import React, {useState} from "react";

// Components
import QCM from "../components/Qcm.jsx";

// Styles
import "../styles/HomePage.css";


export default function HomePage() {
    const [currentTopic, setCurrentTopic] = useState("food");

    return (
        <div>
            <Navbar />
            <div className={"main"}>
                <div className={"topicSelection"}>
                    <button className={currentTopic==="sports" ? "topicButton selected" : "topicButton"} onClick={() => setCurrentTopic("sports")}>Sports</button>
                    <button className={currentTopic==="animals" ? "topicButton selected" : "topicButton"} onClick={() => setCurrentTopic("animals")}>Animals</button>
                    <button className={currentTopic==="food" ? "topicButton selected" : "topicButton"} onClick={() => setCurrentTopic("food")}>Food</button>
                    <button className={currentTopic==="IT" ? "topicButton selected" : "topicButton"} onClick={() => setCurrentTopic("IT")}>IT</button>
                </div>
                <QCM topic={currentTopic}/>
            </div>

        </div>
    );
}