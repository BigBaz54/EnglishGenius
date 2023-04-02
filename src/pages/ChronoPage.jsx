import Navbar from "../components/Navbar.jsx";
import React, {useState} from "react";

// Components
import QCM from "../components/Qcm.jsx";
import Chrono from "../components/Chrono.jsx";

// Styles
import "../styles/ChronoPage.css";


export default function ChronoPage(props) {
    const topic = 'IT';
    const [time, setTime] = React.useState(60);

    React.useEffect(() => {
        if (time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        } else {
            setTime(60);
        }
    }, [time]);

    return (
        <div>
            <Navbar />
            <div className={"main"}>
                <Chrono time={time}/>
                <QCM topic={topic}/>
            </div>

        </div>
    );
}