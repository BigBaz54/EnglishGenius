import React from "react";
import Navbar from "../components/Navbar.jsx";

// Styles
import "../styles/AboutPage.css";

export default function AboutPage() {
    return (
        <div >
            <Navbar />
            <div className={"about"}>
                <h1>What is LearnEnglishWithEase ?</h1>
                <p>
                    Our goal is to help you work on your english, we aimed to make an <br/>
                    app that everyone can use very easily and quickly, no account, no <br/>
                    settings, just learning.
                </p>
            </div>
        </div>
    );
}