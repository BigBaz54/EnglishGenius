import React from "react";

//Styles
import "../styles/Chrono.css";

export default function Chrono() {
    const [time, setTime] = React.useState(60);

    React.useEffect(() => {
        if (time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        } else {
            setTime(60);
        }
    }, [time]);

    return (
        <div className="chrono">
            <div className="chrono__time">{time}</div>
        </div>
    );
};