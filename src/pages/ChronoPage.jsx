import Navbar from "../components/Navbar.jsx";
import React, {useState} from "react";
import {useParams} from "react-router-dom";

// Components
import QCM from "../components/Qcm.jsx";
import Chrono from "../components/Chrono.jsx";
import Popup from "../components/Popup.jsx";

// Styles
import "../styles/ChronoPage.css";


export default function ChronoPage(props) {
    const {topic} = useParams();
    const [time, setTime] = React.useState(60);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    function incrementScore() {
        setScore(score + 1);
    }

    function incrementTotal() {
        setTotal(total + 1);
    }

    React.useEffect(() => {
        if (time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        } else {
            setShowPopup(true);
        }
    }, [time]);

    return (
        <div>
            <Navbar />
            <div className={"main"}>
                <Chrono time={time}/>
                <QCM topic={topic} score={score} total={total} incrementScore={() => incrementScore()} incrementTotal={() => incrementTotal()}/>
            </div>
            {showPopup ? <Popup score={score} closePopup={() => setShowPopup(false)}/> : null}
        </div>
    );
}