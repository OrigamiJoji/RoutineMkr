import React from "react";
import "../reset.css";
import "./style.css";

function Home() {
    return (
        <div className="page-container">
            <div className="page-item" style={{ backgroundColor: "#363732" }}>
                <div className="page-item-left">
                    <div className="hero-text">
                        Welcome, <br /> to New Beginnings.
                    </div>
                    <div className="desc-text">
                        Start overcoming yourself today
                    </div>
                </div>
                <div className="page-item-right">
                    <img
                        src={require("../assets/clock.png")}
                        height={120}
                        width={120}
                    />
                </div>
            </div>
            <div className="page-item" style={{ backgroundColor: "#ededed" }}>
                <span className="page-item-box">
                    Break Bad Habits
                    <img src={require("../assets/calendar.png")} />
                </span>
                <span className="page-item-box">
                    Set Some Goals
                    <img src={require("../assets/checkmark.png")} />
                </span>
                <span className="page-item-box">
                    Accomplish More
                    <img src={require("../assets/improvement.png")} />
                </span>
                <span className="page-item-box">
                    Create a Better You
                    <img src={require("../assets/person.png")} />
                </span>
            </div>
            <div className="page-item" style={{ backgroundColor: "#dbdbdb" }}>
                <div className="page-item-singular">
                    "Dreams can become a reality when we possess a vision that
                    is characterized by the willingness to work hard, a desire
                    for excellence, and a belief in our right and our
                    responsiblity to be equal members of society." <br />
                    –Janet Jackson
                </div>
            </div>
            <div className="footer">
                <span>
                    Website created by George Sarac <br />
                    Icons provided by{" "}
                        <a href="https://icons8.com/">icons8.com</a>
                </span>
            </div>
        </div>
    );
}
// #282A35
// 53D8FB
// 363732
// 66C3FF
// DCE1E9
// D4AFB9

export default Home;
