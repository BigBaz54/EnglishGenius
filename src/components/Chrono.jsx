import React from "react";

//Styles
import "../styles/Chrono.css";

export default function Chrono(props) {
    return (
        <div className="chrono">
            <div className="chrono_time">{props.time}</div>
        </div>
    );
};