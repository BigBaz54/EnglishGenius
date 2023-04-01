import React from "react";
import Navbar from "../components/Navbar.jsx";

// Components
import QCM from "../components/Qcm.jsx";

// Styles
import "../styles/HomePage.css";


export default function HomePage() {
    return (
        <div>
            <Navbar />
            <div className={"main"}>
                <h1>Lets play !!</h1>
                <QCM topic="easy"/>
            </div>

        </div>
    );
}